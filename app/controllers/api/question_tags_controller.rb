class Api::QuestionTagsController < ApplicationController

  def new

  end

#   (byebug) params
# {"name"=>"b", "questionId"=>"10", "format"=>:json, "controller"=>"api/question_tags", "action"=>"create", "question_id"=>"10"}
# (byebug)

  def create
    question_id = params[:questionId].to_i
    question = Question.find(params[:questionId])
    debugger
    tags = params[:name].split(', ')
    tags.each do |tag|
      question.tag(tag)
    end
  end

  def show
    debugger
    @question_tag = QuestionTag.find(params[:id].to_i)
    
  end


  private
  def question_tag_params
    params.require(:question_tag).permit(:name, :title, :questionId, :id)
  end

end
