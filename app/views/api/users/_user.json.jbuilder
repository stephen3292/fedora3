json.extract! user, :username, :id, :description
json.questions user.questions
json.image_url asset_path(user.avatar.url(:original))
