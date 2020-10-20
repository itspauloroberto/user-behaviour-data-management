class User
  class UpdateService
    attr_reader :params, :user

    def initialize(params:)
      @params = params
    end

    def call
      return nil if params.nil? || params[:id].nil?
      update_user if found_user.present?
    end

    private

    def update_user
      user.name = params[:name] if params[:name].present?
      user.email = params[:email] if params[:email].present?
      user.birthday = params[:birthday] if params[:birthday].present?
      user.gender = params[:gender] if params[:gender].present?
      user.enabled = params[:enabled] if !params[:enabled].nil?
      user.save ? user : nil
    end

    def found_user
      begin
        @user = User.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        @user = nil
      end
    end

  end
end