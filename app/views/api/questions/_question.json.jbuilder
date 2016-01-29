
json.extract! question, :id, :title, :body, :user_id
json.image_url asset_path(question.image.url)
