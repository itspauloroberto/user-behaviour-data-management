class User
  class IndexService
    attr_reader :per_page, :page

    def initialize(params:)
      @per_page = params[:per_page] || 30
      @page = params[:page] || 1
    end

    def call
      users = User.paginate(page: page, per_page: per_page)
      return users.order(:id).map { |user| UserShowSerializer.new(user) } if users.length
      []
    end

  end
end