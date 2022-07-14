class UsersController < ApplicationController

  # GET /users
  def index
    @users = filter_users

    render json: @users
  end

  # GET /users/1
  def show
    @user = User.find(params[:id])
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

  private

  # Filter users by search term
  def filter_users
    if params[:search]
      User.where("name iLIKE :search", search: "%#{params[:search]}%")
    else 
      User.all
    end
  end
end
