
var React = require('react');
var QuestionIndexItem = require('../questions/questionsIndexItem');
var AnswersIndexItem = require('./answers_index_item.jsx');
var AnswerForm = require('./answer_form');



var AnswersIndex = React.createClass({

  render: function() {
    return(
      <div>
        This is where the answers will go:
        < AnswersIndexItem />
      < AnswerForm />
      </div>
    );
  }

});

module.exports = AnswersIndex;
