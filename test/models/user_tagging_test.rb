# == Schema Information
#
# Table name: user_taggings
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  user_tag_id :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

require 'test_helper'

class UserTaggingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
