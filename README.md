
# Fedora

[Heroku link][heroku]

[heroku]: http://www.askfedora.com

Fedora is a web application for questions that is inspired by Quora and built
with Rails, PostgreSQL, and React.js.

## Features
Users can sign in, sign in as a guest, and sign up. Once authenticated, users can
ask, answer, search, and tag questions, as well as upload images.

### Authentication
Fedora uses React for authentication and generates a password digest on the
backend with BCrypt.

### Users can ask questions
Users can do this in two ways. On the home page (user show page) users can
directly ask questions through the toolbar input on top. Should the user want
to ask a longer or more detailed question, he can do this by clicking his username
on the right side of the toolbar. This will redirect the user to a page with
space for the question's title, body, accompanying tags, as well as image
upload.

### Users can answer questions
Users can also answer questions. On the user homepage they can directly answer
a question and upload an image by clicking answer question. They can also click
"Answer" on the toolbar. This will redirect users to a page populated with
unanswered questions.

### Users can read questions
Users do this by clicking "Read" on the toolbar. This brings them to a page
with already answered questions.

### Users can upload photos
Users can upload questions when signing up, asking questions, and answering them.

### Users can search questions
Users can search questions by clicking the "Notifications" tag on the toolbar.

### Users can tag their own questions and read questions by tag
Users can tag their own questions when asking and view questions
by tags by clicking. Users can also view their own tags from their
homepage.






## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md
