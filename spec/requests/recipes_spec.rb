require 'rails_helper'

RSpec.describe "Recipes", type: :request do
  let(:headers) do 
    { "Accept" => "application/json", 'Authorization': 'Bearer ' + token.token }
  end
  
  sign_in(user)
  
  def sign_in( user )
    token = create(:access_token, resource_owner_id: user.id)
  end


  # before :each do
  #   sign_in(user)
  # end
  

  describe "GET recipes" do
    it "returns all recipes" do
      get "/api/recipes", headers: headers
      
      expect(response).to have_http_status(:success)
    end
  end

  xdescribe "GET /show" do
    it "returns 1 recipe" do
      # create recipe using factorybot
      # get with recipe.id
      get "/api/recipes/#{recipe.id}", headers: headers

      # expect response body to contain the recipe.
      expect(response).to have_http_status(:success)
    end
  end


  xdescribe "POST recipe" do
    it "creates a recipe" do
      expect { 
        post '/api/recipes', params: { recipe: {user, title: 'foo', ingredients: 'bar', content: 'baz'} }
      }.to change {Recipe.count}.from(0).to(1)

      expect(response).to have_http_status(:created)
    end
  end


  xdescribe "PUT recipe" do
    it "updates recipe" do
      user = create(:user)
      # create recipe
      # put should update something, title or description
      # expect that the change has been written to the db.
    end

    context "when updating someone else's recipe" do
      it "does not change the recipe" do
      end
    end
  end 


  xdescribe "DELETE recipe"
    it "deletes recipe" do
    end

    context "when deleting someone else's recipe" do
      it "does not deletes the recipe" do
      end
    end    
  end
end
