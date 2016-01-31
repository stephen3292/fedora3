
var React = require('react');
var QuestionIndexItem = require('../questions/questionsIndexItem');
var AnswersIndexItem = require('./answers_index_item.jsx');
var AnswerForm = require('./answer_form');
var AnswersStore = require('./../../stores/answers_store');
var CurrentUserStore = require('../../stores/current_user_store');
 AnswerApiUtil = require('./../../util/answers_api_util');




var AnswersIndex = React.createClass({

  getInitialState: function(){
    return ({answers: AnswersStore.all()});
  },

  _onChange: function() {
    this.setState({answers: AnswersStore.all()});
  },

  componentDidMount: function(){
    AnswersStore.addListener(this._onChange);
    AnswerApiUtil.fetchQuestionAnswers(this.props.questionId);
  },




  render: function() {

    console.log(AnswersStore.all());

    var answers = this.state.answers.map(function (answer) {
      return <AnswersIndexItem answer={answer} key={answer.id}/>;
    });


    return(
      <div>
        <div>
          {answers}
        </div>
      < AnswerForm questionId={this.props.questionId}/>
      </div>
    );

  }

});

module.exports = AnswersIndex;
