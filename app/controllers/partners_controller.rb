class PartnersController < ApplicationController
  before_action :set_partner, only: %i[ show update destroy ]

  # GET /partners
  def index
    @partners = Partner.all

    render json: @partners
  end

  # GET /partners/1
  def show
    render json: @partner
  end

  # POST /partners
  def create
    @partner = Partner.new(partner_params)

    if @partner.save
      render json: @partner, status: :created, location: @partner
    else
      render json: @partner.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /partners/1
  def update
    if @partner.update(partner_params)
      render json: @partner
    else
      render json: @partner.errors, status: :unprocessable_entity
    end
  end

  # DELETE /partners/1
  def destroy
    @partner.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_partner
      @partner = Partner.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def partner_params
      params.require(:partner).permit(:showcase_id, :user_id, :name)
    end
end
