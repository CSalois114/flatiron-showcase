class UserInfo < ApplicationRecord
  belongs_to :user

  validates :email, format: { with: /@/, message: "Must be a valid email" }
  validates :phone_number, length: { is: 10 }
end
