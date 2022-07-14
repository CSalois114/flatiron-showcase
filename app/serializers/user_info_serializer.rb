class UserInfoSerializer < ActiveModel::Serializer
  attributes :id, :email, :phone_number, :location, :about_me
  has_many :social_links
  has_one :user

  def phone_number
    phone_number = object.phone_number
    phone_number && "#{phone_number/10000000}-#{phone_number/10000%1000}-#{phone_number%10000}"
  end
end
