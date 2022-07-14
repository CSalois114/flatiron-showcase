class ProfileController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]

  # GET /profile/:sub
  def show
    render json: @user, serializer: UserProfileSerializer, include: [
      'showcases', 
      'showcases.repositories', 
      'showcases.videos', 
      'showcases.skills', 
      'skills', 
      'user_info',
      'user_info.social_links'
    ]
  end

  # POST /profile
  def create
    @user = User.new(user_params)
    if @user.save
      user_info = UserInfo.create!(email: params[:user_info][:email], user: @user)
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /profile/:sub
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /profile/:sub
  def destroy
    @user.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find_by!(sub: params[:sub])
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params.require(:user).permit(:name, :image, :sub)
  end

  def user_info_params
    params.require(:user_info).permit(:email)
  end

end