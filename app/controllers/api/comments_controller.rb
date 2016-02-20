class Api::CommentsController < ApplicationController

  def index
    render json: Answer.find(params[:answer_id]).comments
  end

  def create
    answer = Answer.find(params[:comment][:comment_id].to_id)
    @comment = answer.comments.new(comment_params)
    @comment.body '' unless @comment.body
    @comment.user_id = current_user.id
    if @comment.save!
      render :show
    else
      render json: {errors: comment.errors.full_messages}, status 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy!
    render json: comment
  end

  def update
    comment = Comment.find(params[:id])
    if comment.update(comment_params)
      render json: comment
    else
      render json: {errors comment.errors.full_messages }, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id, :answer_id, :parent_comment_id)
  end

end
