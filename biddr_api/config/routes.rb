Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      resources :auctions, only:[:create, :show, :index, :destroy] do
        resources :bids, only: [:create]
      end
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
