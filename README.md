
# Welcome to Fedora!

##[Live][heroku]

[heroku]: http://www.askfedora.com

Fedora is a web application for questions that is inspired by Quora and built
with Rails, PostgreSQL, and React.js. The site is designed to be a fun and easy
way to ask and answer questions.

[![screenshot]./docs/wireframes/screenshot.png](http://www.askfedora.com)

[screenshot]: ./docs/wireframes/screenshot.png


## Features

### Authentication and SignUp
  * Users can sign up or sign in as a demo user
  * Upon sign up users are given a password digest created through BCrypt.
  * Users can also choose a profile picture. Image uploads are saved on an
    AWS server.

### Questions
  * Users can ask questions in two ways.
  * From the homepage, they can simply type into the question background.
  * Should one want to ask longer question, one can do that by clicking on
    his or her username in the header.
  * This brings them to a page with space to ask a question with a body, tags,
    or accompanying image.
  * Questions rendered using JSON as well as JSON partials for its user, tags,
    and answer.
  * A list of the user's questions is displayed on their homepage.

### Answers
  * Of course, users can also answer questions.
  * Answers are nested within questions.
  * Answers also allow for image uploads.

### Tags
  * Users can tag questions when asking.
  * Clicking on a question's tags will bring the user to a list of questions
    sharing that tag.

### Read Tab
  * Users can read unanswered questions by clicking "Read" on the toolbar. This
    brings them to a page with already answered questions.

### Answer Tab
  * Clicking on the "Answer" tab will bring the user to a page populated with
    questions that await an answer.

### Search Tab
  * Fedora also allows for real-time search using PgSearch. Users can search
    questions by clicking the "Search" tab on the toolbar.

### Photo Uploads
  * Photos, either for profiles, questions or answers, can be uploaded and are
    stored on AWS servers.




## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md
