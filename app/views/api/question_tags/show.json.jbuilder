json.partial! 'api/question_tags/question_tag', question_tag: @question_tag


json.questions @question_tag.questions do |question|
  json.partial! 'api/questions/question', question: question
end
