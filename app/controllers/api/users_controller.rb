class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user) 
      render 'api/users/show'
    else
      errors = @user.errors.full_messages.map do |error|
        if error == "Fname can't be blank"
          error = "Please enter your first name."
        elsif error == "Lname can't be blank"
          error = "Please enter your last name."
        elsif error == "Email can't be blank"
          error = "Please enter an email address."
        elsif error == "Password is too short (minimum is 6 characters)"
          error = "Password must be at least 6 characters."
        elsif error == "Email has already been taken"
          error = "An account with this email address already exists."
        else
          error
        end
      end
      render json: errors, status: 401
    end
  end

  def search
    user_email = User.where(email: params[:email])
    unless user_email.empty?
      render json: user_email
    else
      render json: ["Check your email address or "], status: 404
    end

  end

  def show
    @user = User.find(params[:id])
    if @user
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def index
    @users = User.all
    render 'api/users/index'
  end

  private 
  
  def user_params
    params.require(:user).permit(:email, :fname, :lname, :password, :text) 
  end

end
