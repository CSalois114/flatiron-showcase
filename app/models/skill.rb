class Skill < ApplicationRecord
  has_many :used_skills
  has_many :showcases, through: :used_skills
  has_many :users, through: :showcases

  validates :name, presence: true, uniqueness: true
end
