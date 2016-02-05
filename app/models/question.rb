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

class Question < ActiveRecord::Base
  include Taggable
  validates :title, presence: true
  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  belongs_to :user

  has_many :answers

  has_many :question_taggings
  has_many :question_tags, through: :question_taggings, source: :question_tag



  def question_tag_list
    QuestionTags.all.uniq
  end

  include PgSearch
  multisearchable :against => [:title, :image, :username]
end
