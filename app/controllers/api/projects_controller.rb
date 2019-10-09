class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.all
    # @projects = Project.all.includes(images: [:blob])
    render :index
  end

  def show
    @project = Project.with_attached_images.find(params[:id])
    render :show
  end

  private

  def project_params
    params.require(:post).permit(:title, :description, images: [])
  end
end