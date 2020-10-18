class User
  class ShowService
    attr_reader :params, :user

    def initialize(params:)
      @params = params
    end

    def call
      return nil if params.nil? || params[:id].nil?
      begin
        User.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        nil
      end
    end

  end
end