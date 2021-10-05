class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.integer :recipe_id
      t.string :title
      t.integer :author_id
      t.text :content
      t.string :created_at
      t.string :datetime,
      t.string :updated_at
      t.string :datetime

      t.timestamps
    end
  end
end
