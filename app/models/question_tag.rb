# == Schema Information
#
# Table name: question_tags
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime
#  updated_at :datetime
#

class QuestionTag < ActiveRecord::Base
  validates :name, presence: true

  has_many :question_taggings
  has_many :questions, through: :question_taggings

  has_many :answers, through: :questions
end
