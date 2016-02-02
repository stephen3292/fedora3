class QuestionTagging < ActiveRecord::Base
  belongs_to :question
  belongs_to :question_tagging
end
