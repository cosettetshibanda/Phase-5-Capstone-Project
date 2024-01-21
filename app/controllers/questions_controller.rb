class QuestionsController < ApplicationController
    before_action :find_question, only: [:show, :update, :destroy]
    skip_before_action :authorize_user_resource, only: [:index]

    def index
      if params[:user_id]
        user = User.find_by_id(params[:user_id])
        @questions = user.questions 
      else
        @questions = Question.all 
      end
            render json: @qustions, status: :ok
    end

    def show
        render json: @question, status: :ok
    end

    def update
        @question.update(question_params)
        render json: @question, status: :ok
    end

    def create
        question = @current_user.questions.create!(review_params)
        render json: question, status: :created
    end

    private

    def question_find
        @question = @current_user.questions.find(params[:id])
    end

    def question_params
        params.require(:question).permit(:topic, :post)
end
