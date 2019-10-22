class CreateCategoryProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :category_projects do |t|
      t.integer :category_id, null: false
      t.integer :project_id, null: false
      t.timestamps
    end
  end
end
