class ProfessorSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest
end
