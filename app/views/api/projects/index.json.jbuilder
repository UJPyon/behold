@projects.each do |project|
  json.set! project.id do
    json.partial! 'project', project: project
    json.imageUrls project.images.map { |image| url_for(image) }
  end
end