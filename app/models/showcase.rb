class Showcase < ApplicationRecord
  belongs_to :user
  has_many :repositories, dependent: :destroy
  has_many :videos, dependent: :destroy
  has_many :partners, dependent: :destroy
  has_many :used_skills, dependent: :destroy
  has_many :skills, through: :used_skills

  scope :blog, -> { where(kind: :blog) }
  scope :project, -> { where(kind: :project) }

  validates :name, presence: true
  validates :kind, presence: true, inclusion: { in: %w(blog project), message: "Can't showcase a %{value}" }
  validates :order, presence: true, uniqueness: { scope: :user } 
end
