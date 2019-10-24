class AddTagColumnToCategories < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :tag, :string
  end
end
