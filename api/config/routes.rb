Rails.application.routes.draw do
  namespace :users do
    post '', action: 'create'
    get '', action: 'index'
    get ':id', action: 'show'
    patch ':id', action: 'update'
    delete ':id', action: 'delete'
  end
end
