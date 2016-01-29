
# Fedora

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Fedora is a web application for questions that is inspired by Quora and built
with Rails, PostgreSQL, and React.js. It will allow users to:

  * Create an account
  * Log in/Log out
  * Log in as guest
  * Create, read, edit, tag(pin), and delete own questions
  * Read, answer, upvote/downvote other questions
  * Read, reply to, upvote/downvote other answers
  * View popular topics based on tags
  * View other account questions and tags

# Bonus

  * Search based on questions' tags and text content
  * Follow and edit own feeds based on questions' tags and own activity
  * Allow for multiple sessions
  * Improve scrolling (infinite)




## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Question Model, and JSON API (1.5 days)

In Phase 1, I will implement signin/signup and authentication. There will
be a page after signup with the application's root React component, as well as
links to tags and trending topics. I will also set up a JSON API for questions.

[Details][phase-one]

### Phase 2: Flux Architecture and React Question Component (2.5 days)

For phase 2, I will set up Flux, the React Router, and the React views for the
question component on the main page. I will create a Question Store to allow for
CRUD functionality. The React views created in this phase will be
'QuestionsIndex','QuestionForm', 'QuestionsIndexItem'. I will begin styling with
bootstrap here as well.

[Details][phase-two]

### Phase 3: Add Answers to Questions (1.5 days)

In phase three I will add the answers feature to React components group. This
involve creating an Answers Store and creating the following React views,
'AnswersIndex', 'AnswersForm', 'AnswersIndexItem'.

[Details][phase-three]

### Phase 4: Add Replies to Answers (1 day)

Hopefully, by now I will understand flux architecture pretty well and will be
able to add replies to answers within a day. This will be similar to phase three
but nested one level deeper.

[Details][phase-four]

### Phase 5: Add Tags and Votes (2 days)

Here I will add two new features, tags and votes. Users will be able to tag
questions and create new tags as well. Users will also be able to upvote or
downvote questions and answers, which will factor into an author's overall score.
I will also continue a bit with styling if I have the time.

[Details][phase-five]

### Phase 6: User Show Page and Trending (1 day)

I will update the user show page which will now have a list of their questions as well
as their questions' tags and votes. It will also have an overall vote score
which is the sum of their question and answer vote totals. I will also add a
trending feature which will contain links to popular topics.

[Details][phase-six]

### Phase 7: Seed w/Questions/Answers/Replies, Add Styling, Cleanup (1.5 days)

Here I will add styling with CSS and bootstrap. I will also seed the db and
generally cleanup anything that doesn't look or feel right.

[Details][phase-seven]

###

### Bonus
- [ ] Add search feature to question bar and combine functionality
- [ ] Make custom feeds based on user activity
- [ ] Improve scrolling
- [ ] Make user show page questions a react component w/accompanying features
- [ ] Make trending show page a react component as well

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
[phase-seven]: ./docs/phases/phase7.md
