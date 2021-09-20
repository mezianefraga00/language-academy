class SessionsController < ApplicationController
    skip_before_action :authorize, only: :createpro, only: :createstu
  
    def createpro
      user = Professor.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
    end
    def createstu
        user = Student.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user
        else
          render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
      end

    def createstudent
        user = Student.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user
        else
          render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
      end

  
    def destroy
      session.delete :user_id
      head :no_content
    end
  
  end
  