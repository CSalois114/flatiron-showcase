class SocialLinkSerializer < ActiveModel::Serializer
  attributes :id, :name, :url
  has_one :user_info
end
