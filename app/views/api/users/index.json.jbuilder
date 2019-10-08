require 'open-uri'

@users.each do |user|
  json.set! user.id do
    json.partial! 'user', user: user
    if user.avatar.attached?
      json.avatarUrl url_for(user.avatar) 
    end
  end
end