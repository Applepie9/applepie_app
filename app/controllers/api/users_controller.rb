module Api
  class UsersController < Api::ApplicationController
    skip_before_action :doorkeeper_authorize!, only: %i[create]

    def create
      user = User.new(
        email: user_params[:email], 
        password: user_params[:password], 
        password_confirmation: user_params[:password_confirmation]
      )

      client_app = Doorkeeper::Application.find_by(uid: request.headers["Client-Id"])

      return render(json: { error: 'Invalid client ID'}, status: 403) if !client_app

      if user.save
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
        render(json: { error: user.errors.full_messages }, status: 422)
      end
    end

    private

    def user_params
      params.permit(:email, :password, :password_confirmation)
    end
  end
end
