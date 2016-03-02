json.extract! answer, :id, :title, :body, :user_id, :question_id, :created_at, :votes
json.image_url asset_path(answer.image.url(:original))
json.user do
  json.partial! 'api/users/user', user: answer.user
end

json.comments do
  json.partial! partial: 'api/comments/comment', collection: answer.comments, as: :comment
end
