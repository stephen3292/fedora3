
var React = require('react');
var AnswersIndexItem = require('./answers_index_item.jsx');
var AnswerForm = require('./answer_form');
var CurrentUserStore = require('../../stores/current_user_store');
 AnswerApiUtil = require('./../../util/answers_api_util');




var AnswersIndex = React.createClass({


  render: function() {

    var answers = this.props.question.answers.map(function (answer) {
      return <AnswersIndexItem answer={answer} key={answer.id}/>;
    });


    return(
      <div>
        <div className="answer-list">
          {answers}
        </div>
      < AnswerForm question={this.props.question}/>
      </div>
    );

  }

});

module.exports = AnswersIndex;
