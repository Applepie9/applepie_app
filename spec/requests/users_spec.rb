require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "POST create" do
    context 'with correct params' do
      it "creates and returns a user with an access token belonging to the user" do
        application = create(:application)

        expect {
          post '/api/users', 
            params: {
              email: "foo@bar.com", 
              password: "password", 
              password_confirmation: "password" 
            },
            headers: { "Client-Id" => application.uid }
          }.to change {User.count}.by(1)
        
        expect(response).to have_http_status(:ok)
        access_token = Doorkeeper::AccessToken.find_by(token: JSON.parse(response.body)["user"]["access_token"])
        user = User.find_by(email: "foo@bar.com")
        expect(access_token.resource_owner_id).to eq user.id
      end
    end

    context 'with incorrect params' do
      it "creates and returns a user with an access token belonging to the user" do
        application = create(:application)

        expect {
          post '/api/users', 
            params: {
              email: "foo@bar.com", 
              password: "password", 
              password_confirmation: "something else" 
            },
            headers: { "Client-Id" => application.uid }
          }.to_not change {User.count}

        expect(response).to have_http_status(:unprocessable_entity)
        expect(JSON.parse(response.body)).to eq({"error"=>["Password confirmation doesn't match Password"]})
      end
    end
  end
end