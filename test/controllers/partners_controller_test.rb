require "test_helper"

class PartnersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @partner = partners(:one)
  end

  test "should get index" do
    get partners_url, as: :json
    assert_response :success
  end

  test "should create partner" do
    assert_difference("Partner.count") do
      post partners_url, params: { partner: { name: @partner.name, showcase_id: @partner.showcase_id, user_id: @partner.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show partner" do
    get partner_url(@partner), as: :json
    assert_response :success
  end

  test "should update partner" do
    patch partner_url(@partner), params: { partner: { name: @partner.name, showcase_id: @partner.showcase_id, user_id: @partner.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy partner" do
    assert_difference("Partner.count", -1) do
      delete partner_url(@partner), as: :json
    end

    assert_response :no_content
  end
end
