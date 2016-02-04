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

require 'test_helper'

class QuestionTaggingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
