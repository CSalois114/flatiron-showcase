class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :url
  has_one :showcase
end
