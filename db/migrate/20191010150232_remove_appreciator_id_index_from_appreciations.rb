class RemoveAppreciatorIdIndexFromAppreciations < ActiveRecord::Migration[5.2]
  remove_index :appreciations, name: "index_appreciations_on_appreciator_id"
end
