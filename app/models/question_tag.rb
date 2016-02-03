class QuestionTag < ActiveRecord::Base
  validates :name, presence: true

  has_many :question_taggings
  has_many :questions, through: :question_taggings

  
end
