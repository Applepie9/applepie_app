module Api
  class SessionsController < Api::ApplicationController
    skip_before_action :doorkeeper_authorize!, only: %i[create]

    def create
      user = User.authenticate(session_params[:email], session_params[:password])
      client_app = Doorkeeper::Application.find_by(uid: request.headers["Client-Id"])

      return render(json: { error: 'Invalid client ID'}, status: 403) if !client_app

      if user
        access_token = Doorkeeper::AccessToken.create(
          resource_owner_id: user.id,
          application_id: client_app.id,
          expires_in: Doorkeeper.configuration.access_token_expires_in.to_i,
          scopes: ''
        )

        render(json: {
          user: {
            email: user.email,
            access_token: access_token.token,
            token_type: 'bearer',
            expires_in: access_token.expires_in,
            created_at: access_token.created_at.to_time.to_i
          }
        })
      else
        render(json: { error: "Incorrect credentials" }, status: 422)
      end
    end

    def revoke
      doorkeeper_token.revoke

      render(json: {}, status: 200)

    end

    private

    def session_params
      params.permit(:email, :password)
    end
  end
end
