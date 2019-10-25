json.extract! category, :id, :name, :description
json.projectIds category.projects.map { |project| project.id }