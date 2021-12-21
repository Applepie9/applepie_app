require 'rails_helper'

RSpec.describe "Sessions", type: :request do
  describe "POST create" do
    context 'when correct credentials are provided' do
      it "creates an access token belonging to the user" do
        application = create(:application)
        user = create(:user, email: "foo@bar.com", password: "password", password_confirmation: "password")

        expect {
          post '/api/sessions', 
            params: {
              email: "foo@bar.com", 
              password: "password", 
            },
            headers: { "Client-Id" => application.uid }
          }.to change {Doorkeeper::AccessToken.count}.by(1)
        
        expect(response).to have_http_status(:ok)
        access_token = Doorkeeper::AccessToken.find_by(token: JSON.parse(response.body)["user"]["access_token"])
        expect(access_token.resource_owner_id).to eq user.id
      end
    end

    context 'when incorrect credentials are provided' do
      it "does not create an access token" do
        application = create(:application)
        user = create(:user, email: "foo@bar.com", password: "password", password_confirmation: "password")

        expect {
          post '/api/sessions', 
            params: {
              email: "foo@bar.com", 
              password: "something else", 
            },
            headers: { "Client-Id" => application.uid }
          }.to_not change {Doorkeeper::AccessToken.count}
        
          expect(response).to have_http_status(:unprocessable_entity)
          expect(JSON.parse(response.body)).to eq({"error"=>"Incorrect credentials"})
      end
    end

    context 'when invalid client id is provided' do
      it "does not create an access token" do
        application = create(:application)
        user = create(:user, email: "foo@bar.com", password: "password", password_confirmation: "password")

        expect {
          post '/api/sessions', 
            params: {
              email: "foo@bar.com", 
              password: "password", 
            },
            headers: { "Client-Id" => "foobar" }
          }.to_not change {Doorkeeper::AccessToken.count}
        
          expect(response).to have_http_status(:forbidden)
          expect(JSON.parse(response.body)).to eq({"error"=>"Invalid client ID"})
      end
    end
  end

  describe "POST revoke" do
    context 'when authorized' do
      it "revokes the access token" do
        token = create(:access_token)

        expect {
          post '/api/sessions/revoke', headers: { 'Authorization': 'Bearer ' + token.token }
        }.to change {token.reload.revoked?}.from(false).to(true)
      end
    end
  end
end
