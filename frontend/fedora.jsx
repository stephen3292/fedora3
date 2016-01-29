var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var QuestionForm = require('./components/questionForm.jsx');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var App = require('./components/app');
var UsersIndex = require('./components/users/users_index');
var CurrentUserStore = require('./stores/current_user_store');
var SessionsApiUtil = require('./util/sessions_api_util');

var SessionForm = require('./components/sessions/new');
var UserForm = require('./components/users/user_form');
 ApiUtil = require('./util/apiUtil.js');
 QuestionsIndex = require('./components/questionsIndex.jsx');
 QuestionStore = require('./stores/questions_store.js');
 QuestionDetail = require('./components/questionDetail');








console.log(ApiUtil.fetchAllQuestions());
console.log(QuestionStore.all());


var routes = (

  <Route path="/" component={App} onEnter={_ensureLoggedIn}>
   <IndexRoute component={ UsersIndex } onEnter={_ensureLoggedIn} />
   <Route path="login" component={ SessionForm }/>
   <Route path="users/new" component={ UserForm } />
  </Route>

);

console.log('hi');

  function _ensureLoggedIn(nextState, replace, callback) {
    debugger
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
