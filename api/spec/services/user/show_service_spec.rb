require 'rails_helper'

RSpec.describe User::ShowService do
  let!(:user) { create(:user) }
  let!(:params) { { id: user.id } }

  describe "#call" do
    subject { described_class.new(params: params).call }

    context "with a existing user" do
      it "returns the user data" do
        expect(subject).to eq User.find(user.id)
      end
    end

    context "with a non existing user" do
      subject { described_class.new(params: { id: 0 }).call }

      it "returns nil" do
        expect(subject).to eq nil
      end
    end
  end
end