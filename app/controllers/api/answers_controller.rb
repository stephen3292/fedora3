class Api::AnswersController < ApplicationController
  def index
    # render json: Question.all
    # render json: Question.find(params[:question_id]).answers
    Question.includes(:answers).all.each do |q|
      render json: q.answers.to_a
    end
  end

  def create
    question = Question.find(params[:answer][:question_id].to_i)
    @answer = question.answers.new(answer_params)
    @answer.body = '' unless @answer.body
    @answer.user_id = current_user.id
    if @answer.save!
      render :show
    else
      render json: { errors: answer.errors.full_messages }, status: 422
    end
  end

  def upvote; vote(1); end
  def downvote; vote(-1); end

  private
  def answer_params
    params.require(:answer).permit(:title, :direction, :body, :user_id, :question_id, :answer_id, :image, :username)
  end

  def vote(direction)
    @answer = Answer.find(params[:answer_id])
    @vote = @answer.votes.create!(user_id: current_user.id, value: direction)

    if @vote.save!
      render :show
    else
      render json: { errors: answer.errors.full_messages }, status: 422
    end
  end

end
