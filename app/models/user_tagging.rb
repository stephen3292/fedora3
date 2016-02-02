class UserTagging < ActiveRecord::Base
  belongs_to :user
  belongs_to :user_tag
end
