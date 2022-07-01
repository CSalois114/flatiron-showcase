class BlogPostSerializer < ActiveModel::Serializer
  attributes :id, :title, :url, :description
  has_one :showcase
end
