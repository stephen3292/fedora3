# == Schema Information
#
# Table name: question_taggings
#
#  id              :integer          not null, primary key
#  question_id     :integer          not null
#  question_tag_id :integer          not null
#  created_at      :datetime
#  updated_at      :datetime
#

class QuestionTagging < ActiveRecord::Base
  belongs_to :question
  belongs_to :question_tag
end
