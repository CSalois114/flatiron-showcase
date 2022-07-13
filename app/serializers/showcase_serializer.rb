class ShowcaseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :url, :kind, :position, :preview_image
  has_one :user
  has_many :videos
  has_many :repositories
  has_many :skills
end
