# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Question.destroy_all

User.destroy_all

  a = User.create(username: 'Bob', password: 'password',
        description: 'ok')
  b = User.create(username: 'Tim', password: 'password',
        description: 'old')
  c = User.create(username: 'Jim', password: 'password',
        description: 'md-phd')
  d = User.create(username: "stephen3292", password: "stephen3292",
        description: "stephen3292")
  e = User.create(username: "guest user", password: "guest user",
        description: "guest user")

  q1 = Question.create(user_id: a.id, title: 'Is this working?', body: 'idk', username: a.username)
  q2 = Question.create(user_id: b.id, title: 'will this work', body: 'dec', username: b.username)
  q3 = Question.create(user_id: c.id, title: 'hmmm', body: 'idk', username: c.username)

  a1 = Answer.create(title: 'maybe not', body: "", user_id: a.id, question_id: q1.id, username: a.username)
  a2 = Answer.create(title: 'not totally sure', body: "", user_id: d.id, question_id: q1.id, username: d.username)
  a3 = Answer.create(title: 'lol idk', body: "", user_id: c.id, question_id: q1.id, username: c.username)
