json.extract! answer, :id, :title, :body, :user_id, :question_id
json.image_url asset_path(answer.image.url(:original))
json.user do
  json.partial! 'api/users/user', user: answer.user
end
