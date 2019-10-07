json.partial! 'api/users/user', user: @user 
json.avatarUrl url_for(@user.avatar)