json.extract! project, :id, :title, :description
json.artistId project.artist.id
json.commentIds project.comments.pluck(:id)