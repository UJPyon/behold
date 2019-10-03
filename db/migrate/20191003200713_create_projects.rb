class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :artist_id, null: false
      t.timestamps
    end
    add_index :projects, :artist_id, unique: true
  end
end
