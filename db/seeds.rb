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

  a = User.create(username: 'Bob', password: 'password', avatar: "https://static-s.aa-cdn.net/img/ios/649977132/4effa0b29c7ad5f0dccb3f4d00980d36?v=1",
        description: "One of those guys who says he's an 'educator'")
  b = User.create(username: 'Tim', password: 'password',
        description: 'Professor Emeritus of Some Obscure Subject')
  c = User.create(username: 'Jim', password: 'password', avatar: "http://www.brushwiz.com/images/nationalities/spanish/top_spanish_paintings_portrait_of_pope_innocent_x_by_diego_velazquez.jpg",
        description: "I like to answer other people's questions.")
  d = User.create(username: "Donald", password: "Donald",
        description: "That's The Donald to you")
  e = User.create(username: "Guest User", password: "Guest User",
        description: "A gentleman and a scholar")
  f = User.create(username: 'Tom', password: 'password', avatar: "https://s-media-cache-ak0.pinimg.com/236x/11/f2/bc/11f2bc0eeddd2988f2c159b04ec2bb71.jpg",
        description: 'Comes from Yahoo answers')
  g = User.create(username: 'Anonymous', password: 'password', avatar: "http://mostfamousperson.net/LeonardoDiCaprio.png",
        description: 'better not say anything bad here')
  h = User.create(username: 'Donald', password: 'password', avatar: "http://rlv.zcache.com.au/thomas_gainsborough_the_blue_boy_square_sticker-r1a347ca5aa6b4f568ddff8f23508e554_v9wf3_8byvr_324.jpg",
        description: 'MD-PhD')
  i = User.create(username: "Ted", password: "password", avatar: "http://images5.fanpop.com/image/photos/31400000/Turtle-turtles-31450325-1525-1470.jpg",
        description: "[this page is intentionally left blank]")
  j = User.create(username: "Bill", password: "password", avatar: "http://www.umoga.com/images/user/SagyDemn/AGothic.png",
        description: "a Few credentials with Arbitrary capitalization")

  q0 = Question.create(user_id: c.id, title: 'Is this a long enough question?',
  body: "If it's not I can make it longer by writing a bunch of gibberish in the body section. Would that possibly work?", username: c.username)
  q1 = Question.create(user_id: a.id, title: 'Does the answer feature work yet?',
  body: 'idk', username: a.username)
  q2 = Question.create(user_id: b.id, title: 'Why am I waiting two hours for pizza in Bushwick?', image: "http://farm8.static.flickr.com/7128/7666282294_3c4eb6a6de_m.jpg",
  body: 'dec', username: b.username)
  q3 = Question.create(user_id: c.id, title: 'Are these pictures hosted on AWS', image: "http://media02.hongkiat.com/amazon-jeff-bezos/jeff-bezos-2.jpg",
  body: 'idk', username: c.username)
  q4 = Question.create(user_id: a.id, title: 'Does the answer feature work yet?',
  body: 'idk', username: a.username)
  q5 = Question.create(user_id: e.id, title: 'Should I prevent myself from answering my own questions?',
  body: 'dec', username: e.username)
  q6 = Question.create(user_id: c.id, title: '[yawns]',
  body: 'idk', username: c.username)

  q7 = Question.create(user_id: f.id, title: 'Is it a good idea to add more questions?',
  body: 'idk', username: f.username)
  q8 = Question.create(user_id: a.id, title: 'Does the answer feature work yet?',
  body: 'idk', username: a.username)
  q9 = Question.create(user_id: b.id, title: 'Can I get dinner somewhere else?',
  body: 'dec', username: b.username)
  q10 = Question.create(user_id: h.id, title: 'I need to ask a new question right??',
  body: 'idk', username: h.username)
  q11 = Question.create(user_id: d.id, title: 'Was The Revenant any good?', image: "http://www.clipartsheep.com/images/129/winnie-the-pooh-pic-14-129527.jpeg",
  body: 'idk', username: d.username)
  q12 = Question.create(user_id: j.id, title: 'How many questions should this page show?',
  body: 'I really want to know!', username: j.username)
  q13 = Question.create(user_id: c.id, title: 'Should I write longer questions?',
  body: 'Sometimes I think question sites should have more space for the writer to complicate matters and for their question to make using the site more difficult for casual readers. A good way to do this might be to have an input space after the question title, maybe to write a question body. Does anybody think this is a good idea?', username: c.username)
  q14 = Question.create(user_id: f.id, title: 'How those sprout things that hipster carry around work? Do they put them in their drinks or their food?',
  body: 'bonus if you know how they taste', username: f.username)


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
  a6 = Answer.create(title: "The real site doesn't have one!",
  body: "", user_id: a.id, question_id: q0.id, username: a.username)

  a7 = Answer.create(title: "No.",
  body: "", user_id: a.id, question_id: q13.id, username: a.username)
  a8 = Answer.create(title: "That's a good question. But I think a space for answers is more important. Sometimes people like to write really really long answers on this site and reading through them can be quite tedious. I doubt this answer will be as long as some of the other ones but it's already getting up there in length.",
  body: "", user_id: d.id, question_id: q7.id, username: d.username)
  a9 = Answer.create(title: "Doesn't that question need a picture?", image: "http://vignette2.wikia.nocookie.net/villains/images/0/04/QuestionMark.png/revision/latest?cb=20080722190045",
  body: "", user_id: c.id, question_id: q3.id, username: c.username)
  a10 = Answer.create(title: 'It was ok, mostly grunting.',
  body: "", user_id: g.id, question_id: q11.id, username: g.username)




  qt1 = QuestionTag.create(name: "tech")
  qtg1 = QuestionTagging.create(question_id: q0.id, question_tag_id: qt1.id)

  qt2 = QuestionTag.create(name: "movies")
  qtg2 = QuestionTagging.create(question_id: q11.id, question_tag_id: qt2.id)

  qt3 = QuestionTag.create(name: "pizza")
  qtg3 = QuestionTagging.create(question_id: q2.id, question_tag_id: qt3.id)
