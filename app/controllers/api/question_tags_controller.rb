class Api::QuestionTagsController < ApplicationController

  def new

  end

#   (byebug) params
# {"name"=>"b", "questionId"=>"10", "format"=>:json, "controller"=>"api/question_tags", "action"=>"create", "question_id"=>"10"}
# (byebug)

  def create
    question_id = params[:questionId].to_i
    question = Question.find(params[:questionId])
    tags = params[:name].split(', ')

    new_tags = tags.map do |tag|
      question.tag(tag.downcase)
    end

    render json: new_tags 
  end

  def show
    @question_tag = QuestionTag.find(params[:id].to_i)

  end


  private
  def question_tag_params
    params.require(:question_tag).permit(:name, :title, :questionId, :id)
  end

end
