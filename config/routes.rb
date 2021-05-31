Rails.application.routes.draw do
  resources :links, only: %i[index create], param: :slug
  get 'links/:slug', to: 'links#show'

  root "home#index"
  get '*path', to: 'home#index', via: :all
end