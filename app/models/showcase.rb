class Showcase < ApplicationRecord
  attr_accessor :skip_position_validation
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
  validates :position, presence: true
  validates :position, uniqueness: { scope: :user }, unless: :skip_position_validation

  def self.shift_positions user_id, start, offset
    Showcase.where("user_id = ? AND position >= ?", user_id, start).update_all("position = position + #{offset}")
  end
end
