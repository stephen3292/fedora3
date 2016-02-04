json.extract! answer, :id, :title, :body, :user_id, :question_id
json.user do
  json.partial! 'api/users/user', user: answer.user
end
