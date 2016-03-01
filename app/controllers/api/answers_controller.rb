class Api::AnswersController < ApplicationController
  def index
    render json: Question.find(params[:question_id]).answers
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

  def upvote; vote(1); end
  def downvote; vote(-1); end

  private
  def answer_params
    params.require(:answer).permit(:title, :direction, :body, :user_id, :question_id, :answer_id, :image, :username)
  end

  def vote(direction)
    debugger
    @answer = Answer.find(params[:answer_id])
    @vote = @answer.votes.create!(user_id: current_user.id, value: direction)

    if @vote.save!
      render :show
    else
      render json: { errors: answer.errors.full_messages }, status: 422
    end
  end

end
