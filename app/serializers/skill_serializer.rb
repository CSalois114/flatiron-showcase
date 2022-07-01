class SkillSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_one :showcase
end
