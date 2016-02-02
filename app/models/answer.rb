# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  body        :text
#  user_id     :integer          not null
#  question_id :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#  username    :string
#

class Answer < ActiveRecord::Base
  validates :question_id, :title, presence: true

  belongs_to :question
  belongs_to :user
  include PgSearch
  multisearchable :against => [:title, :username]
end
