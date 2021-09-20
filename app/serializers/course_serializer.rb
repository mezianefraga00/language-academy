class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :description
  has_one :professor
end
