Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    get "api_test", to:'static#api_test'
    resources :cats, only: [:index, :update]
    resources :tweets, only: [:index]
    get 'my_cats', to: 'cats#my_cats'
    get 'all_tweets', to: 'tweets#all_tweets'
  end
end
