class UserShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :gender, :birthday
end
