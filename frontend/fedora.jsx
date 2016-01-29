var React = require('react');
var ReactDOM = require('react-dom');
var Dispatcher = require('./dispatcher/dispatch');
var Router = require('react-router').Router;
var QuestionForm = require('./components/questionForm.jsx');
var Route = require('react-router').Route;
 ApiUtil = require('./util/apiUtil.js');
 QuestionsIndex = require('./components/questionsIndex.jsx');
 questionStore = require('./stores/questionStore.js');
 QuestionDetail = require('./components/questionDetail');



console.log(ApiUtil.fetchAllQuestions());
console.log(questionStore.all());
var App = React.createClass({
  render: function () {
    return(

      <div className="questions-super-index">
        <h1 className="super-header"></h1>
        <QuestionsIndex/>
          <div className="details">
            {this.props.children}
          </div>

        </div>

    );
  }
});

var router = ( // defines the entire structure of our app
    <Router>
      <Route path="/" component={App}>
        <Route path="question/:questionId" component={QuestionDetail}/>
      </Route>
    </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(router, document.getElementById('root'));
});
