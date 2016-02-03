class Api::QuestionTagsController < ApplicationController

  def new

  end

  def create
    debugger
  end

  def show

  end


  private
  def answer_params
    params.require(:question_tag).permit(:name, :title, :question_id)
  end

end
