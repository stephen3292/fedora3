class Api::QuestionsController < ApplicationController
  def index
    render json: Question.all.to_json
  end

  def show
    question = Question.find(params[:id])
    render json: question
  end

  def create
    debugger
    question = Question.new(question_params)

    question.user_id = current_user.id
    question.username = current_user.username

    question.body = '' unless question.body
    if question.save!
      render json: question
    else
      render json: { errors: question.errors.full_messages }, status: 422
    end
  end

  def destroy
    question = Question.find(params[:id])
    question.destroy!
    render json: question
  end

  def update
    question = Question.find(params[:id])
    if question.update(question_params)
      render json: question
    else
      render json: { errors: question.errors.full_messages }, status: 422
    end
  end


  private
  def question_params
    params.require(:question).permit(:title, :body, :image, :username)
  end
end
