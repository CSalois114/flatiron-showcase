require "test_helper"

class UsedSkillsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @used_skill = used_skills(:one)
  end

  test "should get index" do
    get used_skills_url, as: :json
    assert_response :success
  end

  test "should create used_skill" do
    assert_difference("UsedSkill.count") do
      post used_skills_url, params: { used_skill: { showcase_id: @used_skill.showcase_id, skill_id: @used_skill.skill_id } }, as: :json
    end

    assert_response :created
  end

  test "should show used_skill" do
    get used_skill_url(@used_skill), as: :json
    assert_response :success
  end

  test "should update used_skill" do
    patch used_skill_url(@used_skill), params: { used_skill: { showcase_id: @used_skill.showcase_id, skill_id: @used_skill.skill_id } }, as: :json
    assert_response :success
  end

  test "should destroy used_skill" do
    assert_difference("UsedSkill.count", -1) do
      delete used_skill_url(@used_skill), as: :json
    end

    assert_response :no_content
  end
end
