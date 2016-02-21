class Comment < ActiveRecord::Base
  validates :body, :author, :answer, presence: true

  belongs_to :answer, inverse_of: :comments
  has_one :question, through: :answer
  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :user_id,
    inverse_of: :comments
  )

  has_many(
    :child_comments,
    class_name: "Comment",
    foreign_key: :parent_comment_id,
    primary_key: :id
  )

  belongs_to(
    :parent_comment,
    class_name: "Comment",
    foreign_key: :parent_comment_id,
    primary_key: :id
  )



  include PgSearch
  multisearchable :against => [:body, :author]
end
