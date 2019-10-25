json.extract! category, :id, :name, :description, :tag
json.projectIds category.projects.map { |project| project.id }