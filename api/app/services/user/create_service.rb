class User
  class CreateService
    attr_reader :params, :user

    def initialize(params:)
      @params = params
    end

    def call
      return nil if !valid_params
      
      build_user
      user.save
      return user
    end

    private

    def build_user
      @user = User.new
      @user.name = params[:name]
      @user.email = params[:email]
      @user.birthday = params[:birthday]
      @user.gender = params[:gender]
    end

    def valid_params
      return false if params.nil? || params[:name].nil? || params[:email].nil? || params[:birthday].nil? || params[:gender].nil?
      return true
    end

  end
end