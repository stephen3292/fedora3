json.partial! 'api/question_tags/question_tag', question_tag: @question_tag


json.questions @question_tag.questions do |question|
  json.answers question.answers
  json.url url_for(question)
end
