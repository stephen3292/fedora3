var React = require('react');
var History = require('react-router').History;
var QuestionDetail = require('./questionDetail');
var AnswersIndex = require('../answers/answers_index');
var QuestionIndexItem = React.createClass({

  mixins: [History],

  getInitialState: function() {
    return(
      {detail: false}
    );
  },

  toggleState: function (e) {
    e.stopPropagation();
    this.history.pushState(null, "/question/" + this.props.question.id);
    var newDetail = this.state.detail ? false : true;
    this.setState({detail: newDetail});
    console.log(this.state.detail);
  },

  render: function() {

    debugger
    return(
      <li className="single-question group" onClick={this.toggleState}>
        {this.props.question.title}<br/>
        <img className="question-image" src={this.props.question.image_url} />
        <div className="q-username">{this.props.question.username}</div><br/>
        < AnswersIndex question={this.props.question} />
      </li>
    );
  }
});

module.exports = QuestionIndexItem;
