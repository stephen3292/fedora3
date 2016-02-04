json.extract! user, :username, :id, :description
json.image_url asset_path(user.avatar.url(:original))
