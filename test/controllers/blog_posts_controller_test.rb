require "test_helper"

class BlogPostsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @blog_post = blog_posts(:one)
  end

  test "should get index" do
    get blog_posts_url, as: :json
    assert_response :success
  end

  test "should create blog_post" do
    assert_difference("BlogPost.count") do
      post blog_posts_url, params: { blog_post: { description: @blog_post.description, showcase_id: @blog_post.showcase_id, title: @blog_post.title, url: @blog_post.url } }, as: :json
    end

    assert_response :created
  end

  test "should show blog_post" do
    get blog_post_url(@blog_post), as: :json
    assert_response :success
  end

  test "should update blog_post" do
    patch blog_post_url(@blog_post), params: { blog_post: { description: @blog_post.description, showcase_id: @blog_post.showcase_id, title: @blog_post.title, url: @blog_post.url } }, as: :json
    assert_response :success
  end

  test "should destroy blog_post" do
    assert_difference("BlogPost.count", -1) do
      delete blog_post_url(@blog_post), as: :json
    end

    assert_response :no_content
  end
end
