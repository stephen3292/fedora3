# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Question.destroy_all
User.destroy_all
Answer.destroy_all
QuestionTag.destroy_all
QuestionTagging.destroy_all

  a = User.create(username: 'Bob', password: 'password',
        description: 'ok')
  b = User.create(username: 'Tim', password: 'password',
        description: 'Professor of Some Obscure Subject')
  c = User.create(username: 'Jim', password: 'password',
        description: "I like to answer other people's questions.")
  d = User.create(username: "Donald", password: "Donald",
        description: "Donald")
  e = User.create(username: "Guest User", password: "Guest User",
        description: "A gentleman and a scholar")
  f = User.create(username: 'Tom', password: 'password',
        description: 'ok')
  g = User.create(username: 'Hillary', password: 'password',
        description: 'old')
  h = User.create(username: 'Bernie', password: 'password',
        description: 'md-phd')
  i = User.create(username: "Ted", password: "password",
        description: "Donald")
  j = User.create(username: "Marco", password: "password",
        description: "")

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

  q7 = Question.create(user_id: f.id, title: 'Is it a good idea to add more questions?',
  body: 'idk', username: c.username)
  q8 = Question.create(user_id: a.id, title: 'Does the answer feature work yet?',
  body: 'idk', username: a.username)
  q9 = Question.create(user_id: b.id, title: 'Can I get pizza somewhere else?',
  body: 'dec', username: b.username)
  q10 = Question.create(user_id: h.id, title: 'I need to ask a new question right??',
  body: 'idk', username: c.username)
  q11 = Question.create(user_id: d.id, title: 'Maybe I should make a new question?',
  body: 'idk', username: a.username)
  q12 = Question.create(user_id: j.id, title: 'How many questions should the page show?',
  body: 'dec', username: b.username)
  q13 = Question.create(user_id: c.id, title: 'This is a pretty short question.',
  body: 'idk', username: c.username)



  a1 = Answer.create(title: "Yeah, I just didn't want to answer you the first time.",
  body: "", user_id: a.id, question_id: q1.id, username: a.username)
  a2 = Answer.create(title: 'I honestly have no clue. Also I think it would be a good idea to test and see how long an answer I can make before the formatting on the actual site gets a little bit strange. So far I have only written short answers in my seed data but now I will try something a little bit longer. THis was it will look more like the actual quora site, but honestly who knows how it will all go. I certainly dont.',
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
