class RecipesController < ApplicationController
  respond_to :json
  before_action :set_recipe, only: [:show, :update, :destroy]
  skip_before_action :verify_authenticity_token

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
    @recipe = Recipe.new(recipe_params)
    #@recipe = current_user.recipes.build(recipe_params)
    respond_to do |format|
      if @recipe.save
        format.json { render json: @recipe, status: :created, location: @recipe }
      else
        format.json { render json: @recipe.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /recipes/1
  # PATCH/PUT /recipes/1.json
  def update
    respond_to do |format|
      if @recipe.update(recipe_params)
        format.json { render json: @recipe, status: :ok, location: @recipe }
      else
        format.json { render json: @recipe.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /recipes/1
  # DELETE /recipes/1.json
  def destroy
    @recipe.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def recipe_params
      params.require(:recipe).permit(:user_id, :title, :content)
    end

end
