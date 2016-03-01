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

class Answer < ActiveRecord::Base
  validates :question_id, :title, presence: true
  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  belongs_to :question
  belongs_to :user
  has_many :comments, inverse_of: :answer
  has_many :votes

  include PgSearch
  multisearchable :against => [:title, :username]
end
