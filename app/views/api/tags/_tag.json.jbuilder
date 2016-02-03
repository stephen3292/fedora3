json.extract! question_tag, :id, :name
json.questions question_tag.questions
json.answers question_tag.questions.answers
json.image_url asset_path(question_tag.questions.image.url)
