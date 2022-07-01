class UserInfoSerializer < ActiveModel::Serializer
  attributes :id, :email, :phone_number, :location, :about_me
  has_one :user
end
