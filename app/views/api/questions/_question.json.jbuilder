
json.extract! question, :id, :title, :body, :user_id, :username
json.image_url asset_path(question.image.url)
json.answers question.answers
json.question_tags question.question_tags
