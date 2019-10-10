require 'open-uri'

json.extract! user, :email, :id, :fname, :lname, :text, :created_at
json.projectIds user.projects.pluck(:id)

if user.avatar.attached?
  json.avatarUrl url_for(user.avatar)
end
if user.banner.attached?
  json.bannerUrl url_for(user.banner)
end