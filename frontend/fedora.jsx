var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var QuestionForm = require('./components/questions/questionForm');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var App = require('./components/app');
var UserShow = require('./components/users/user_show');
var UsersIndex = require('./components/users/users_index');
var CurrentUserStore = require('./stores/current_user_store');
var SessionsApiUtil = require('./util/sessions_api_util');
var Search = require('./components/search');
var QuestionsReadIndex = require('./components/questions/questionsRead');
var AskQuestion = require('./components/questions/questionLongForm');
var TagShow = require('./components/tags/tag_show.jsx');
var QuestionsAnswer = require('./components/questions/questionsAnswer');

var SessionForm = require('./components/sessions/new');
var UserForm = require('./components/users/user_form');
 ApiUtil = require('./util/apiUtil.js');
 QuestionsIndex = require('./components/questions/questionsIndex');
 QuestionStore = require('./stores/questions_store.js');
 QuestionDetail = require('./components/questions/questionDetail');




var routes = (

  <Route path="/" component={App}  >
   <IndexRoute component={ UserShow } onEnter={_ensureLoggedIn} />
    <Route path="login" component={ SessionForm }/>
    <Route path="users/new" component={ UserForm } />
    <Route path="questions/:questionId" component={QuestionDetail} onEnter={_ensureLoggedIn}/>
    <Route path="questions" component={QuestionsIndex} onEnter={_ensureLoggedIn}/>
    <Route path="search" component={ Search } onEnter={_ensureLoggedIn}/>
    <Route path="read" component={QuestionsReadIndex} onEnter={_ensureLoggedIn} />
    <Route path="ask" component={AskQuestion} onEnter={_ensureLoggedIn} />
    <Route path="answer" component={QuestionsAnswer} onEnter={_ensureLoggedIn}/>
    <Route path="question_tags/:tagId" component={TagShow} onEnter={_ensureLoggedIn} />
  </Route>

);


  function _ensureLoggedIn(nextState, replace, callback) {
    if (CurrentUserStore.userHasBeenFetched()) {
      _redirectIfNotLoggedIn();
    } else {
      SessionsApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn);
    }

    function _redirectIfNotLoggedIn() {
      if (!CurrentUserStore.isLoggedIn()) {
        replace({}, "/login");

      }
      callback();
    }
  }


  document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root'));
  });
