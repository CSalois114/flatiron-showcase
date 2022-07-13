class ShowcasesController < ApplicationController
  before_action :set_showcase, only: %i[ show update destroy ]

  # GET /showcases
  def index
    if params[:user_id]
      @showcases = Showcase.where(user_id: params[:user_id])
      render json: @showcases, include: []
    else
      @showcases = Showcase.all
      render json: @showcases, include: [:skills, :user]
    end
  end

  # GET /showcases/1
  def show
    render json: @showcase
  end

  # POST users/:user_id/showcases
  def create
    @showcase = Showcase.new(showcase_params)
    @showcase.skip_position_validation = true

    if @showcase.save
      render json: @showcase, status: :created
      update_positions
    else
      render json: @showcase.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT users/:user_id/showcases/:id
  def update
    old_position = @showcase.position
    @showcase.skip_position_validation = true
    if @showcase.update(showcase_params)
      render json: @showcase
      update_positions(old_position) if params[:position]
    else
      render json: @showcase.errors, status: :unprocessable_entity
    end
  end

  # DELETE users/:user_id/showcases/:id
  def destroy
    Showcase.shift_positions(params[:user_id], @showcase.position, -1)
    @showcase.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_showcase
      @showcase = Showcase.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def showcase_params
      params.require(:showcase).permit(:user_id, :name, :description, :url, :kind, :position, :preview_image)
    end

    #update the position for all showcases if one changes
    def update_positions old_position=nil
      @showcase.update(position: -1)
      Showcase.shift_positions(params[:user_id], old_position + 1, -1) if old_position
      Showcase.shift_positions(params[:user_id], params[:position], 1)
      @showcase.update(position: params[:position])
    end
end
