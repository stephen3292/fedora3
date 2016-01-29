# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Question.destroy_all

User.destroy_all

  a = User.create(username: 'bill', password: 'password',
        description: 'ok')
  b = User.create(username: 'Tim', password: 'password',
        description: 'old')
  c = User.create(username: 'Jim', password: 'password',
        description: 'md-phd')
  d = User.create(username: "stephen3292", password: "stephen3292",
        description: "stephen3292")

  A = Question.create(user_id: a.id, title: 'Is this working?', body: 'idk', username: a.username)
  B = Question.create(user_id: b.id, title: 'will this work', body: 'dec', username: b.username)
  C = Question.create(user_id: c.id, title: 'hmmm', body: 'idk', username: c.username)
