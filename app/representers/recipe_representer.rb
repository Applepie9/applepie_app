class RecipeRepresenter < Roar::Decorator
  include Roar::JSON

  property :title
  property :content

end
