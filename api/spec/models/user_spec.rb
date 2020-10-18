require 'rails_helper'

RSpec.describe User, type: :model do
  context "using a user with valid attributes" do
    subject { create(:user) }

    it "should be valid" do
      expect(subject).to be_valid
    end

    it "must have email" do
      expect(subject.email).to_not eq nil
    end

    it "must have name" do
      expect(subject.name).to_not eq nil
    end

    it "name should have valid length" do
      expect(subject.name.length).to be_between(3, 50)
    end

    it "email should have valid length" do
      expect(subject.email.length).to be_between(5, 100)
    end

    it "birthday date should be less than today" do
      expect(subject.birthday).to be < Time.zone.now
    end

    it "should have valid gender" do
      expect(subject.gender.value).to be_between(0, 2)
    end
  end

  describe "invalid attribute values should not generate a valid entity" do
    subject { create(:user) }

    it "empty name should not be valid" do
      subject.name = ''
      expect(subject).to_not be_valid
      subject.name = nil
      expect(subject).to_not be_valid
    end

    it "too short name should not be valid" do
      subject.name = 'a'
      expect(subject).to_not be_valid
    end

    it "empty email should not be valid" do
      subject.email = ''
      expect(subject).to_not be_valid
      subject.email = nil
      expect(subject).to_not be_valid
    end

    it "too short email should not be valid" do
      subject.email = 'a@a'
      expect(subject).to_not be_valid
    end

    it "unknown gender should not be valid" do
      subject.gender = 3
      expect(subject).to_not be_valid
    end
  end

end
