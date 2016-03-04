
var React = require('react');
var AnswersIndexItem = require('./answers_index_item.jsx');
var CurrentUserStore = require('../../stores/current_user_store');




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
      </div>
    );

  }

});

module.exports = AnswersIndex;
