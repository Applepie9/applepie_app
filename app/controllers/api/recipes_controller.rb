module Api
  class RecipesController < Api::ApplicationController
    respond_to :json
    before_action :set_recipe, only: [:show, :update, :upload, :destroy]
    skip_before_action :doorkeeper_authorize!, only: [:index, :show]

    # GET /recipes
    # GET /recipes.json
    def index
      @recipes = Recipe.all
      respond_with(@recipes)
    end

    # GET /recipes/1
    # GET /recipes/1.json
    def show
      @recipe = Recipe.find(params["id"])
      respond_with(@recipe)
    end

    # POST /recipes
    # POST /recipes.json
    def create
      # byebug
      @recipe = Recipe.new(recipe_params.except(:file))
      @recipe.photo.attach(params[:file])
      @recipe.user = current_user
      if @recipe.save
        render json: @recipe, status: :created
      else
        render json: @recipe.errors, status: :unprocessable_entity
      end
    end

    def upload
      # The data is a file upload coming from <input type="file" />
      @recipe.photo.attach(params[:file])
      # Generate a url for easy display on the front end 
      photo = url_for(@recipe.photo)

        # Now save that url in the recipe
      if @recipe.update(photo_url: photo)
        render json: @recipe, status: :ok
      end
    end

    # PATCH/PUT /recipes/1
    # PATCH/PUT /recipes/1.json
    def update
        if @recipe.update(recipe_params)
          render json: @recipe, status: :ok
        else
          render json: @recipe.errors, status: :unprocessable_entity
        end
    end

    # DELETE /recipes/1
    # DELETE /recipes/1.json
    def destroy
      @recipe.destroy
      render json: :no_content
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_recipe
        @recipe = Recipe.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def recipe_params
        params.require(:recipe).permit(:user_id, :title, :ingredients, :content, :file)
      end

  end
end