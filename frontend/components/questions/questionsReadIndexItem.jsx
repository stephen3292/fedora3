var React = require('react');
var TagsIndex = require('../tags/tags_index');
var History = require('react-router').History;
var ReadAnswersIndex = require('../answers/read_answers_index');
var QuestionsReadIndexItem = React.createClass({

  mixins: [History],

  render: function() {

    var qId = this.props.question.id;
    var questionDetail = "#/questions/" + qId;
    var title = this.props.question.title;

    return(
      <ul className="single-question group">
          < TagsIndex question={this.props.question} />
        <li className="question-title">
          <a className="question-title-link" href={questionDetail}>{title}</a>
        </li><br/>
        <li>< ReadAnswersIndex question={this.props.question} /></li>
    </ul>
    );
  }
});

module.exports = QuestionsReadIndexItem;
