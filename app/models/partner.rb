class Partner < ApplicationRecord
  belongs_to :showcase
  belongs_to :user

  validates :name, presence: true
end
