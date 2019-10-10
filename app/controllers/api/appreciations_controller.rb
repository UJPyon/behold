class Api::AppreciationsController < ApplicationController

  def index
    @appreciations = current_user.appreciations_received
  end

  def show
    @appreciations = Appreciation.find(params[:id])
    render :show
  end

  def create
    appreciation = Appreciation.new(appreciator_id: current_user.id, project_id: params[:project_id])
    appreciation.save
    render :show
  end

  def destroy
    @appreciation = Appreciation.find(params[:id])
    @appreciation.destroy
    render :show
  end

  private

  def appreciation_params
    params.require(:apprecation).permit(:project_id, :appreciator_id)
  end
end