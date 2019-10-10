require 'open-uri'

json.extract! user, :email, :id, :fname, :lname, :text, :created_at
json.projectIds user.projects.pluck(:id)
json.appreciatedProjectIds user.appreciated_projects.pluck(:id)
json.appreciations user.appreciations_received.count
if user.avatar.attached?
  json.avatarUrl url_for(user.avatar)
end
if user.banner.attached?
  json.bannerUrl url_for(user.banner)
end