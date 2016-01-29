var React = require('react');
var questionsStore = require('./../../stores/questions_store');
var questionApiUtil = require('./../../util/apiUtil.js');
var QuestionIndexItem = require('./questionsIndexItem.jsx');
var QuestionForm = require('./questionForm.jsx');


var QuestionsIndex = React.createClass({

  getInitialState: function(){
    debugger
    return {questions: questionsStore.all()};
  },

  _onChange: function(){
    this.setState({questions: questionsStore.all()});
  },

  componentDidMount: function(){
    questionsStore.addListener(this._onChange);
    questionApiUtil.fetchAllQuestions();
  },

  render: function() {


    var questions = this.state.questions.map(function (question) {
      return <QuestionIndexItem question={question} key={question.id}/>;
    });

    return(
      <div className="q-index">
        < QuestionForm/>
      <ul className="more-q group">
        <div className="feeds">Feeds</div>
        <div className="all-the-questions">
          {questions}
        </div>

      </ul>
      </div>
    );
  }

});

module.exports = QuestionsIndex;
