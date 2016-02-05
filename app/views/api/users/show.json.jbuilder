json.partial! 'api/users/user', user: @user
json.questions @user.questions
json.answers @user.answers
