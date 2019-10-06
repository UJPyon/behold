class RemoveIndexOnProjectArtistId < ActiveRecord::Migration[5.2]
  remove_index :projects, name: "index_projects_on_artist_id"
end
