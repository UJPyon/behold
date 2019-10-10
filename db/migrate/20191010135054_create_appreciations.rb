class CreateAppreciations < ActiveRecord::Migration[5.2]
  def change
    create_table :appreciations do |t|
      t.integer :project_id, null: false
      t.integer :appreciator_id, null: false
      t.timestamps
    end
    add_index :appreciations, :appreciator_id
    add_index :appreciations, [:project_id, :appreciator_id], unique: true
  end
end
