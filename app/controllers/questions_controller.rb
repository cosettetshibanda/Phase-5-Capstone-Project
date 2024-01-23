class QuestionsController < ApplicationController
    before_action :question_find, only: [:show]
  

    def index
        questions = Question.all 
        render json: questions, status: :ok
    end

    def show
        question = question_find
        render json: carseat, status: :ok
    end

    def update
        question = question_find
        question.update!(question_params)
        render json: question, status: :ok
    end

    def create
        question = Question.create!(question_params)
        render json: question, status: :created
    end

    def destroy
        question = question_find
        question.destroy
        head :no_content
    end

    private

    def question_find
        Question.find(params[:id])
    end

    def question_params
        params.permit(:post)
    end
        
end