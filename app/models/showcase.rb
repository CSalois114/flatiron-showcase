class Showcase < ApplicationRecord
  belongs_to :user

  scope :blog, -> { where(kind: :blog) }
  scope :project, -> { where(kind: :project) }

  validates :name, presence: true
  validates :kind, presence: true, inclusion: { in: %w(blog, project), message: "Can't showcase %{value}" }
  validates :order, presence: true, uniqueness: { scope: :user } 
end
