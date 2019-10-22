json.extract! project, :id, :title, :description
json.artistId project.artist.id
json.commentIds project.comments.pluck(:id)
json.categoryIds project.categories.map { |category| category.id }
json.imageUrls project.images.map { |image| url_for(image) }
json.appreciations project.appreciations.count