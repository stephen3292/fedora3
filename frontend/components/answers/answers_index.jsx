
var React = require('react');
var QuestionIndexItem = require('../questions/questionsIndexItem');
var AnswersIndexItem = require('./answers_index_item.jsx');



var AnswersIndex = React.createClass({

  render: function() {
    return(
      <div>
        This is where the answers will go:
        < AnswersIndexItem />
      </div>
    );
  }

});

module.exports = AnswersIndex;
