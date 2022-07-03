class Video < ApplicationRecord
  belongs_to :showcase

  validates :url, presence: true
end
