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
    this.history.pushState(null, "/question/" + this.props.question.id);
    var newDetail = this.state.detail ? false : true;
    this.setState({detail: newDetail});
    console.log(this.state.detail);
  },

  render: function() {

    if (this.state.detail){
      return (< QuestionDetail />);
    }
    return(
      <li className="single-question" onClick={this.toggleState}>
        {this.props.question.title}
        {this.props.question.username}
        <img className="question-image" src={this.props.question.image_url} />
        < AnswersIndex />
      </li>
    );
  }
});

module.exports = QuestionIndexItem;
