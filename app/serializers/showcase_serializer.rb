class ShowcaseSerializer < ActiveModel::Serializer
  attributes :id, :order
  has_one :user
end
