class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :image

  has_one :user_info
  has_many :skills
  has_many :showcases do
    object.showcases.order(:position)
  end

  # has_many :projects do
  #   object.projects.order(:order)
  # end

  # has_many :blogs do
  #   object.blogs.order(:order)
  # end
end
