require 'open-uri'

json.partial! 'api/users/user', user: @user 
if @user.avatar.attached?
  json.avatarUrl url_for(@user.avatar)
end
if @user.banner.attached?
  json.bannerUrl url_for(@user.banner)
end