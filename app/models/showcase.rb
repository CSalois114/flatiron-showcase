class Showcase < ApplicationRecord
  belongs_to :user
  has_many :used_skills
  has_many :repositories
  has_many :videos
  has_many :partners

  scope :blog, -> { where(kind: :blog) }
  scope :project, -> { where(kind: :project) }

  validates :name, presence: true
  validates :kind, presence: true, inclusion: { in: %w(blog project), message: "Can't showcase a %{value}" }
  validates :order, presence: true, uniqueness: { scope: :user } 
end
