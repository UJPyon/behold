json.extract! user, :email, :id, :fname, :lname, :text, :created_at
json.projectIds user.projects.pluck(:id)
# json.commentIds user.comments.pluck(:id)