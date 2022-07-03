class ShowcaseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :url, :kind, :order
  has_one :user
end
