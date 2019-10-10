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
    @appreciation = Appreciation.new(appreciator_id: current_user.id, project_id: appreciation_params)
    @appreciation.save
    render :show
  end

  def unlike
    @appreciation = Appreciation.find(params[:id])
    @appreciation.destroy
    render :show
  end


  private

  def project_params
    params.require(:post).permit(:title, :description, images: [])
  end

  def appreciation_params
    params.require(:appreciation).permit(:project_id)
  end

end