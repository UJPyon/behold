@comments.each do |comment|
  json.set! comment.project_id do
    json.partial! 'comment', comment: comment
  end
end