class UserInfo < ApplicationRecord
  belongs_to :user
  has_many :social_links, dependent: :destroy

  validates :email, format: { with: /@/, message: "Must be a valid email" }
  validates :phone_number, length: { is: 10 }, allow_nil: true
end
