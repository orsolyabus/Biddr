Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'auctions/show'
      get 'auctions/index'
      get 'auctions/destroy'
      post 'auctions/create'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
