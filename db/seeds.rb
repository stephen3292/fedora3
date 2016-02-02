# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Question.destroy_all
User.destroy_all
QuestionTag.destroy_all
QuestionTagging.destroy_all

  a = User.create(username: 'Bob', password: 'password',
        description: 'ok')
  b = User.create(username: 'Tim', password: 'password',
        description: 'old')
  c = User.create(username: 'Jim', password: 'password',
        description: 'md-phd')
  d = User.create(username: "Donald", password: "Donald",
        description: "Donald")
  e = User.create(username: "Guest User", password: "Guest User",
        description: "Guest User")

  q0 = Question.create(user_id: c.id, title: 'Why is the Sign Out button so tiny?',
  body: 'idk', username: c.username)
  q1 = Question.create(user_id: a.id, title: 'Does the answer feature work yet?',
  body: 'idk', username: a.username)
  q2 = Question.create(user_id: b.id, title: 'Why am I waiting two hours for pizza in Bushwick?',
  body: 'dec', username: b.username)
  q3 = Question.create(user_id: c.id, title: 'Anyone think heroku will screw this all up?',
  body: 'idk', username: c.username)
  q4 = Question.create(user_id: d.id, title: 'Does the answer feature work yet?',
  body: 'idk', username: a.username)
  q5 = Question.create(user_id: e.id, title: 'Should I prevent myself from answering my own questions?',
  body: 'dec', username: b.username)
  q6 = Question.create(user_id: c.id, title: '[yawns]',
  body: 'idk', username: c.username)



  a1 = Answer.create(title: "Yeah, I just didn't want to answer you the first time.",
  body: "", user_id: a.id, question_id: q1.id, username: a.username)
  a2 = Answer.create(title: 'I honestly have no clue.',
  body: "", user_id: d.id, question_id: q2.id, username: d.username)
  a3 = Answer.create(title: "I don't think it's a problem, you can do it on the real site.",
  body: "", user_id: e.id, question_id: q5.id, username: e.username)
  a4 = Answer.create(title: 'lol idk',
  body: "", user_id: c.id, question_id: q1.id, username: c.username)
  a5 = Answer.create(title: "Probably because it doesn't work yet.",
  body: "", user_id: d.id, question_id: q0.id, username: d.username)
  a6 = Answer.create(title: "Be nice, the real site doesn't have one there either and it works if you refresh.",
  body: "", user_id: a.id, question_id: q0.id, username: a.username)

  qt1 = QuestionTag.create(name: "tech")
  qtg1 = QuestionTagging.create(question_id: q0.id, question_tag_id: qt1.id)
