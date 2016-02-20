# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160220175504) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.string   "title",              null: false
    t.text     "body"
    t.integer  "user_id",            null: false
    t.integer  "question_id",        null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "username"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "answers", ["question_id"], name: "index_answers_on_question_id", using: :btree
  add_index "answers", ["user_id"], name: "index_answers_on_user_id", using: :btree

  create_table "comments", force: :cascade do |t|
    t.text     "body",              null: false
    t.integer  "parent_comment_id"
    t.integer  "answer_id",         null: false
    t.integer  "user_id",           null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "comments", ["answer_id"], name: "index_comments_on_answer_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "pg_search_documents", ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree

  create_table "question_taggings", force: :cascade do |t|
    t.integer  "question_id",     null: false
    t.integer  "question_tag_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "question_tags", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "questions", force: :cascade do |t|
    t.integer  "user_id",            null: false
    t.string   "title",              null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "body"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "username"
  end

  add_index "questions", ["user_id"], name: "index_questions_on_user_id", using: :btree

  create_table "user_taggables", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "user_tag_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "user_taggables", ["user_id"], name: "index_user_taggables_on_user_id", using: :btree
  add_index "user_taggables", ["user_tag_id"], name: "index_user_taggables_on_user_tag_id", using: :btree

  create_table "user_taggings", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "user_tag_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "user_tags", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",            null: false
    t.string   "password_digest",     null: false
    t.string   "description",         null: false
    t.string   "session_token",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

end
