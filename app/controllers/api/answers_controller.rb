class Api::AnswersController < ApplicationController
  def index
    @answers json: Answer.all
  end

  def show
    @answer = Answer.find(params[:id])
  end

  def create
    answer = Answer.new(answer_params)
    answer.body = '' unless answer.body
    answer.user_id = current_user.id
    if answer.save!
      render json: answer
    else
      render json: { errors: answer.errors.full_messages }, status: 422
    end
  end

  def destroy
    answer = Answer.find(params[:id])
    answer.destroy!
    render json: answer
  end

  def update
    answer = Answer.find(params[:id])
    if answer.update(answer_params)
      render json: answer
    else
      render json: { errors: answer.errors.full_messages }, status: 422
    end
  end


  private
  def answer_params
    params.require(:answer).permit(:title, :body, :user_id, :question_id, :username)
  end
end
