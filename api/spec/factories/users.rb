require 'faker'
FactoryBot.define do
  factory :user do
    name      { Faker::Name.name }
    email     { Faker::Internet.email }
    birthday  { Faker::Date.between(from: 1.year.ago, to: Date.today) }
    gender    { rand(0..2) }
  end
end
