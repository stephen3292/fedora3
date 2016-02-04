var React = require('react');
var History = require('react-router').History;
var AnswersIndexItem = React.createClass({

  mixins: [History],


  render: function() {

    return(
      <div className="single-answer group">
          <div className="answer-pic"></div>
          <div className="answer-writer">{this.props.answer.username}</div>
          <div className="answer-description">Describe</div><br/>
          <div className="answer-body">{this.props.answer.title}</div>


      </div>
    );
  }
});

module.exports = AnswersIndexItem;
