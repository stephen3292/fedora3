# == Schema Information
#
# Table name: answers
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  body               :text
#  user_id            :integer          not null
#  question_id        :integer          not null
#  created_at         :datetime
#  updated_at         :datetime
#  username           :string
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

require 'test_helper'

class AnswerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
