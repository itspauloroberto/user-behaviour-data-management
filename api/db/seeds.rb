require 'faker';

12.times do
  ::User::CreateService.new(:params => { 
    name: Faker::Name.name, 
    email: Faker::Internet.email, 
    birthday: Faker::Date.between(from: 1.year.ago, to: Date.today),
    gender: rand(1..2)
  }).call
end