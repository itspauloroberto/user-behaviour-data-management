require 'rails_helper'
require 'faker'

RSpec.describe UsersController, type: :request do

  describe "POST #create" do
    let(:params) {
      {
        name: Faker::Name.name,
        email: Faker::Internet.email,
        birthday: Faker::Date.between(from: 1.year.ago, to: Date.today),
        gender: rand(0..2)
      }
    }
    subject { post('/users', params: params) }

    context "with valid params" do
      before do
        subject
      end

      it "returns http success" do
        expect(response).to have_http_status(:success)
      end
    end

    context "with invalid params" do
      subject { post('/users', params: nil) }
      before do
        subject
      end

      it "returns http error" do
        expect(response).to have_http_status(:bad_request)
      end
    end
  end

  describe "GET #show" do
    let(:params) {
      {
        id: rand(1.999)
      }
    }
    subject { get "/users/#{rand(1.999)}" }

    context "with valid params" do
      before do
        subject
      end

      it "returns http success" do
        expect(response).to have_http_status(:success)
      end
    end
  end

  describe "PATCH #update" do
    let(:params) {
      {
        name: Faker::Name.name
      }
    }
    subject { patch("/users/#{rand(1.999)}", params: params) }

    context "with valid params" do
      before do
        subject
      end

      it "returns http success" do
        expect(response).to have_http_status(:success)
      end
    end
  end

  describe "GET #index" do
    subject { get "/users" }

    context "with valid params" do
      before do
        subject
      end

      it "returns http success" do
        expect(response).to have_http_status(:success)
      end
    end
  end

end
