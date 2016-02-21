json.extract! comment, :id, :body, :parent_comment_id, :user_id, :created_at, :answer_id
json.user do
  json.partial! 'api/users/user', user: comment.author
end



json.comments comment.child_comments
