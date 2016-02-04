# == Schema Information
#
# Table name: user_taggings
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  user_tag_id :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class UserTagging < ActiveRecord::Base
  belongs_to :user
  belongs_to :user_tag
end
