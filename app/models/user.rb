class User < ApplicationRecord
  has_many :showcases, dependent: :destroy
  has_many :projects, -> { Showcase.project }, class_name: :Showcase
  has_many :blogs, -> { Showcase.blog }, class_name: :Showcase

  has_many :used_skills, through: :showcases
  has_many :skills, -> { distinct }, through: :used_skills

  has_one :user_info, dependent: :destroy

  validates :name, presence: true
end
