class SocialLink < ApplicationRecord
  belongs_to :user_info

  validates :name, presence: true
  validates :url, presence: true
end
