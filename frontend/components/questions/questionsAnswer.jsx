var React = require('react');
var questionsStore = require('./../../stores/questions_store');
var questionApiUtil = require('./../../util/apiUtil.js');
var QuestionsIndexItem = require('./questionsIndexItem.jsx');


var QuestionsAnswer = React.createClass({

  getInitialState: function(){
    return {questions: questionsStore.all()};
  },

  _onChange: function(){
    this.setState({questions: questionsStore.all().reverse()});
  },

  componentDidMount: function(){
    this.listener = questionsStore.addListener(this._onChange);
    questionApiUtil.fetchAllQuestions();
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },


  render: function() {
    if (this.state.questions) {
      var r_questions = this.state.questions;
        var questions = r_questions.map(function (question) {
          if (question.answers.length === 0) {
            return <QuestionsIndexItem question={question} key={question.id}/>;
          }
      });
    }


    return(
      <div className="q-index">
      <ul className="more-q group">
        <h1 className="answer-the-questions">Answer Questions</h1>
        <div className="r-all-the-questions">
          {questions}
        </div>
      </ul>
      </div>
    );
  }

});

module.exports = QuestionsAnswer;
