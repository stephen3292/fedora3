var React = require('react');
var TagsIndex = require('../tags/tags_index');
var History = require('react-router').History;
var QuestionDetail = require('./questionDetail');
var AnswersIndex = require('../answers/answers_index');

var QuestionIndexItem = React.createClass({

  mixins: [History],


  render: function() {

    var qId = this.props.question.id;
    var questionDetail = "#/questions/" + qId;
    var title = this.props.question.title;
    return(
      <ul className="single-question group">
          <div className="answer-written-in">Question Asked/Answer Written</div>< TagsIndex question={this.props.question} />
          <li className="question-title">
            <a className="question-title-link" href={questionDetail}>{title}</a>
          </li><br/>

        <img className="post-image" src={this.props.question.image_url} />
        < AnswersIndex question={this.props.question} />
    </ul>
    );
  }
});

module.exports = QuestionIndexItem;
