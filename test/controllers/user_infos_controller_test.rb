require "test_helper"

class UserInfosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_info = user_infos(:one)
  end

  test "should get index" do
    get user_infos_url, as: :json
    assert_response :success
  end

  test "should create user_info" do
    assert_difference("UserInfo.count") do
      post user_infos_url, params: { user_info: { about_me: @user_info.about_me, email: @user_info.email, location: @user_info.location, phone_number: @user_info.phone_number, user_id: @user_info.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show user_info" do
    get user_info_url(@user_info), as: :json
    assert_response :success
  end

  test "should update user_info" do
    patch user_info_url(@user_info), params: { user_info: { about_me: @user_info.about_me, email: @user_info.email, location: @user_info.location, phone_number: @user_info.phone_number, user_id: @user_info.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy user_info" do
    assert_difference("UserInfo.count", -1) do
      delete user_info_url(@user_info), as: :json
    end

    assert_response :no_content
  end
end
