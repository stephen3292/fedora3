var React = require('react');
var questionsStore = require('./../../stores/questions_store');
var questionApiUtil = require('./../../util/apiUtil.js');
var QuestionsReadIndexItem = require('./questionsReadIndexItem.jsx');


var QuestionsIndex = React.createClass({

  getInitialState: function(){
    return {questions: questionsStore.all()};
  },

  _onChange: function(){
    this.setState({questions: questionsStore.all().reverse()});
  },

  componentDidMount: function(){
    questionsStore.addListener(this._onChange);
    questionApiUtil.fetchAllQuestions();
  },

  render: function() {


    var r_questions = this.state.questions;
      var questions = r_questions.map(function (question) {
      return <QuestionsReadIndexItem question={question} key={question.id}/>;
    });

    return(
      <div className="q-index">
      <ul className="more-q group">
        <div className="all-the-questions">
          {questions}
        </div>
      </ul>
      </div>
    );
  }

});

module.exports = QuestionsIndex;
