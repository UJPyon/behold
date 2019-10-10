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

  def like
    appreciation = Appreciation.new(project_id: params[:project_id], appreciator_id: current_user.id)
    appreciation.save
    @project = Project.find(appreciation.project_id)
    render :show
  end
  
  def unlike
    appreciation = Appreciation.find_by(project_id: params[:project_id], appreciator_id: current_user.id)
    appreciation.destroy
    @project = Project.find(appreciation.project_id)
    render :show
  end

  private

  def project_params
    params.require(:post).permit(:title, :description, images: [])
  end

end