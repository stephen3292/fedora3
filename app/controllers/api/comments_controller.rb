class Api::CommentsController < ApplicationController

  def index
    Answer.includes(:top_level_comments).all.each do |a|
      render json: a.top_level_comments.to_a
    end
  end

  def create
    answer = Answer.find(params[:comment][:answer_id].to_i)
    @comment = answer.comments.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save!
      render :show
    else
      render json: {errors: comment.errors.full_messages}, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id, :answer_id, :parent_comment_id)
  end

end
