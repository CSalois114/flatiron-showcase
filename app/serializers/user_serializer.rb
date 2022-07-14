class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :image
  has_many :skills
  has_one :user_info
end
