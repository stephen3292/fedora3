# == Schema Information
#
# Table name: questions
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  title              :string           not null
#  created_at         :datetime
#  updated_at         :datetime
#  body               :text
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  username           :string
#

require 'test_helper'

class QuestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
