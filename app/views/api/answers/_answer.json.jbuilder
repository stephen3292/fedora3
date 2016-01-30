json.extract! answer :id, :title, :body, :user_id, :question_id, :username
json.image_url asset_path(answer.image.url)
