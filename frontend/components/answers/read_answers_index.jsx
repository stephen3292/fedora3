
var React = require('react');
var QuestionIndexItem = require('../questions/questionsIndexItem');
var AnswersIndexItem = require('./answers_index_item.jsx');
var AnswersStore = require('./../../stores/answers_store');
var CurrentUserStore = require('../../stores/current_user_store');
 AnswerApiUtil = require('./../../util/answers_api_util');




var AnswersIndex = React.createClass({


  render: function() {

    console.log(AnswersStore.all());
    var answers = this.props.question.answers.map(function (answer) {
      return <AnswersIndexItem answer={answer} key={answer.id}/>;
    });


    return(
      <div>
        <div className="answer-list">
          {answers}
        </div>
      </div>
    );

  }

});

module.exports = AnswersIndex;
