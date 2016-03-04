class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.includes(:answers, :question_tags, :question_taggings, :user, :votes).all
  end

  def show
    @question = Question.includes(:answers, :question_tags, :user, :question_taggings).find(params[:id])
  end

  def create
    @question = Question.new(question_params)
    @question.user_id = current_user.id
    @question.username = current_user.username

    @question.body = '' unless @question.body
    if @question.save!
      render :show
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
