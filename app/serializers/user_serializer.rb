class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :image
  has_many :skills
end
