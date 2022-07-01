class RepositorySerializer < ActiveModel::Serializer
  attributes :id, :name, :url
  has_one :project
end
