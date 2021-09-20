class CoursesController < ApplicationController
    def index
        render json: Course.all
      end
    
      def create
        course = @current_user.courses.create!(course_params)
        render json: course, status: :created
      end
    
      private
    
      def course_params
        params.permit(:name, :category, :description)
      end
end
