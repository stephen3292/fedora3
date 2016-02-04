# == Schema Information
#
# Table name: replies
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  username        :string           not null
#  user_id         :integer          not null
#  answer_id       :integer          not null
#  parent_reply_id :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class ReplyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
