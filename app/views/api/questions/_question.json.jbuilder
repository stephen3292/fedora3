
json.extract! question, :id, :title, :body, :user_id, :username
json.image_url asset_path(question.image.url(:original))
json.answers do
  json.partial! partial: 'api/answers/answer', collection: question.answers, as: :answer
end
json.question_tags question.question_tags
