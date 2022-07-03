class UsedSkillSerializer < ActiveModel::Serializer
  attributes :id
  has_one :showcase
  has_one :skill
end
