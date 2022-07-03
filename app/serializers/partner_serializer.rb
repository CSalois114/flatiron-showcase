class PartnerSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :showcase
  has_one :user
end
