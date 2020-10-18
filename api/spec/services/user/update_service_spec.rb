require 'rails_helper'
require 'faker'

RSpec.describe User::UpdateService do
  let!(:user) { create(:user) }
  let!(:name_change_params) { { id: user.id, name: Faker::Name.name } }

  describe "#call" do

    context "updating a existing user" do

      context "changing its name" do
        subject { described_class.new(params: name_change_params).call }

        it "should change the user name" do
          expect(subject.name).to_not eq user.name
        end

        it "should have the new name" do
          expect(subject.name).to eq name_change_params[:name]
        end
      end
    end

    context "updating a non existing user" do
      subject { described_class.new(params: { id: 0 }).call }

      it "returns nil" do
        expect(subject).to eq nil
      end
    end
  end
end