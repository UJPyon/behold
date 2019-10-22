json.extract! category, :id, :name
json.projectIds category.projects.map { |project| project.id }