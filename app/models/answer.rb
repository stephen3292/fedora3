class Answer < ActiveRecord::Base
  validates :user_id, :question_id, :title, presence: true

  belongs_to :question
  belongs_to :users
end
