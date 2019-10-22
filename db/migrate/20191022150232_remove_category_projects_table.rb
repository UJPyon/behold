class RemoveCategoryProjectsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :category_projects
  end
end
