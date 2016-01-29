var React = require('react');
var questionsStore = require('./../../stores/questions_store');
var questionApiUtil = require('./../../util/apiUtil.js');
var QuestionIndexItem = require('./questionsIndexItem.jsx');
var QuestionForm = require('./questionForm.jsx');


var QuestionsIndex = React.createClass({

  getInitialState: function(){
    return {questions: questionStore.all()};
  },

  _onChange: function(){
    this.setState({questions: questionStore.all()});
  },

  componentDidMount: function(){
    questionStore.addListener(this._onChange);
    questionApiUtil.fetchAllQuestions();
  },

  componentWillUnmount: function(){
    questionStore.remove(this._onChange);
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
