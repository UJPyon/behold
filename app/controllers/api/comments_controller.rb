class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all
    render :index
  end

  def create
    @comment = Comment.create!(comment_params)
    render :index
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render :index
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
  
end