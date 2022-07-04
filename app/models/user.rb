class User < ApplicationRecord
  has_many :showcases, dependent: :destroy
  has_many :projects, -> { Showcase.project }, class_name: :Showcase
  has_many :blogs, -> { Showcase.blog }, class_name: :Showcase

  has_many :used_skills, through: :showcases
  has_many :skills, through: :used_skills

  has_one :user_info, dependent: :destroy

  validates :first_name, presence: true
  validates :last_name, presence: true
end
