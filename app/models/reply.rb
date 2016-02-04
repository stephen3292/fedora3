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

class Reply < ActiveRecord::Base
end
