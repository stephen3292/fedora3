json.extract! user, :username, :id, :description, :created_at
json.image_url asset_path(user.avatar.url(:original))
