var React = require('react');
var TagsIndex = require('../tags/tags_index');
var History = require('react-router').History;
var QuestionDetail = require('./questionDetail');
var ReadAnswersIndex = require('../answers/read_answers_index');
var QuestionIndexItem = React.createClass({

  mixins: [History],

  getInitialState: function() {
    return(
      {detail: false}
    );
  },

  toggleState: function (e) {
    // e.stopPropagation();
    //maybe dont do this....

  },

  render: function() {
    return(
      <li className="single-question group">
          < TagsIndex question={this.props.question} />
        {this.props.question.title}<br/>
        <img className="question-image" src={this.props.question.image_url} />
        <div className="q-username">{this.props.question.username}</div><br/>
        < ReadAnswersIndex question={this.props.question} />
      </li>
    );
  }
});

module.exports = QuestionIndexItem;
