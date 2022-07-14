class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  def index
    @users = filter_users

    render json: @users
  end

  # GET /users/1
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

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user, serializer: UserProfileSerializer, include: [
        'showcases', 
        'showcases.repositories', 
        'showcases.videos', 
        'showcases.skills', 
        'skills', 
        'user_info',
        'user_info.social_links'
      ]
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :image, :sub)
    end

    # Filter users by search term
    def filter_users
      if params[:search]
        User.where("name iLIKE :search", search: "%#{params[:search]}%")
      else 
        User.all
      end
    end
end
