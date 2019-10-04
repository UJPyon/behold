json.partial! 'api/projects/project', project: @project 
json.imageUrls @project.images.map { |image| url_for(image) }