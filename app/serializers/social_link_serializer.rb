class SocialLinkSerializer < ActiveModel::Serializer
  attributes :id, :name, :url
  has_many :social_links
  has_one :user_info
end
