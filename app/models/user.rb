class User < ApplicationRecord
  has_many :showcases
  has_many :projects, -> { Showcase.project }, class_name: :Showcase
  has_many :blogs, -> { Showcase.blog }, class_name: :Showcase

  validates :first_name, presence: true
  validates :last_name, presence: true
end
