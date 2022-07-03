class Repository < ApplicationRecord
  belongs_to :showcase
  
  validates :url, format: { with: /https:\/\/github.com\//, message: "Must be a valid github repository"}, presence: true
  validates :name, presence: true
end
