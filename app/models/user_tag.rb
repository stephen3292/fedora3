class UserTag < ActiveRecord::Base
  validates :name, presence: true
  
  has_many :user_taggings
  has_many :users, through: :user_taggings
end
