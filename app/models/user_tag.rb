# == Schema Information
#
# Table name: user_tags
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime
#  updated_at :datetime
#

class UserTag < ActiveRecord::Base
  validates :name, presence: true
  
  has_many :user_taggings
  has_many :users, through: :user_taggings
end
