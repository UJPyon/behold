class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :index
    else
      render json: ['This field is required'], status: 422
    end
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