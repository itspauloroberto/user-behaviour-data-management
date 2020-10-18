require 'rails_helper'
require 'faker'

RSpec.describe User::CreateService do
  let(:params) {
    {
      name: Faker::Name.name,
      email: Faker::Internet.email,
      birthday: Faker::Date.between(from: 1.year.ago, to: Date.today),
      gender: rand(0..2)
    }
  }

  describe "#call" do
    subject { described_class.new(params: params).call }

    context "with valid params" do
      
      it "creates a new user" do
        expect {
          subject
        }.to change(User, :count).by(1)
      end

      it "creates a existing and valid user" do
        expect(User.find(subject.id)).to be_valid
      end

    end

    context "with invalid params" do
      subject { described_class.new(params: nil).call }

      it "does not create a new user" do
        expect {
          subject
        }.to_not change(User, :count)
      end
    end
  end
end