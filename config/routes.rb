Rails.application.routes.draw do
  
  resources :courses, only: [:index, :create]
  post "/signup_professor", to: "professors#create"
  post "/signup_student", to: "students#create"

 

  post "/login", to: "sessions#createpro"
  post "/loginstudent", to: "sessions#createstu"

  
  delete "/logout", to: "sessions#destroy"

end
