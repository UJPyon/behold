json.extract! user, :email, :id, :fname, :lname
json.projectIds user.projects.pluck(:id)
# :appreciatedProjectIds