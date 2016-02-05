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
        description: "One of those people who calls himself an 'educator'")
  b = User.create(username: 'Tim', password: 'password',
        description: 'Professor of Some Obscure Subject')
  c = User.create(username: 'Jim', password: 'password',
        description: "I like to answer other people's questions.")
  d = User.create(username: "Donald", password: "Donald",
        description: "That's The to you")
  e = User.create(username: "Guest User", password: "Guest User",
        description: "A gentleman and a scholar")
  f = User.create(username: 'Tom', password: 'password',
        description: 'ok')
  g = User.create(username: 'Hillary', password: 'password',
        description: 'better not say anything bad here')
  h = User.create(username: 'Donald', password: 'password',
        description: 'MD-PhD')
  i = User.create(username: "Ted", password: "password",
        description: "Donald")
  j = User.create(username: "Bill", password: "password",
        description: "")

  q0 = Question.create(user_id: c.id, title: 'Why is the Sign Out button so tiny?',
  body: 'idk', username: c.username)
  q1 = Question.create(user_id: a.id, title: 'Does the answer feature work yet?',
  body: 'idk', username: a.username)
  q2 = Question.create(user_id: b.id, title: 'Why am I waiting two hours for pizza in Bushwick?',
  body: 'dec', username: b.username)
  q3 = Question.create(user_id: c.id, title: 'Anyone think Heroku will screw this all up?',
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
  q9 = Question.create(user_id: b.id, title: 'Can I get dinner somewhere else?',
  body: 'dec', username: b.username)
  q10 = Question.create(user_id: h.id, title: 'I need to ask a new question right??',
  body: 'idk', username: c.username)
  q11 = Question.create(user_id: d.id, title: 'Was The Revenant any good?',
  body: 'idk', username: a.username)
  q12 = Question.create(user_id: j.id, title: 'How many questions should the page show?',
  body: 'dec', username: b.username)
  q13 = Question.create(user_id: c.id, title: 'Should I write longer questions?',
  body: 'Sometimes I think question sites should have more space for the writer to complicate matters and for their question to make using the site more difficult for casual readers. A good way to do this might be to have an input space after the question title, maybe to write a question body. Does anybody think this is a good idea?', username: c.username)



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

  a7 = Answer.create(title: "No.",
  body: "", user_id: a.id, question_id: q13.id, username: a.username)
  a8 = Answer.create(title: 'I honestly have no clue. Also I think it would be a good idea to test and see how long an answer I can make before the formatting on the actual site gets a little bit strange. So far I have only written short answers in my seed data but now I will try something a little bit longer. THis was it will look more like the actual quora site, but honestly who knows how it will all go. I certainly dont.',
  body: "", user_id: d.id, question_id: q2.id, username: d.username)
  a9 = Answer.create(title: "Doesn't that question need a picture?",
  body: "", user_id: g.id, question_id: q11.id, username: g.username)
  a10 = Answer.create(title: 'It was ok, mostly grunting.',
  body: "", user_id: c.id, question_id: q1.id, username: c.username)
  a11 = Answer.create(title: "Probably because it doesn't work yet.",
  body: "", user_id: d.id, question_id: q0.id, username: d.username)
  a12 = Answer.create(title: "Be nice, the real site doesn't have one there either and it works if you refresh.",
  body: "", user_id: a.id, question_id: q0.id, username: a.username)




  qt1 = QuestionTag.create(name: "tech")
  qtg1 = QuestionTagging.create(question_id: q0.id, question_tag_id: qt1.id)

  qt2 = QuestionTag.create(name: "movies")
  qtg2 = QuestionTagging.create(question_id: q11.id, question_tag_id: qt2.id)

  qt3 = QuestionTag.create(name: "pizza")
  qtg3 = QuestionTagging.create(question_id: q2.id, question_tag_id: qt3.id)

  qt4 = QuestionTag.create(name: "tech")
  qtg4 = QuestionTagging.create(question_id: q0.id, question_tag_id: qt4.id)

  qt5 = QuestionTag.create(name: "tech")
  qtg5 = QuestionTagging.create(question_id: q0.id, question_tag_id: qt5.id)

  qt6 = QuestionTag.create(name: "tech")
  qtg6 = QuestionTagging.create(question_id: q0.id, question_tag_id: qt6.id)

  qt7 = QuestionTag.create(name: "tech")
  qtg7 = QuestionTagging.create(question_id: q0.id, question_tag_id: qt7.id)
