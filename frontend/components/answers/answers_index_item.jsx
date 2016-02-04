var React = require('react');
var History = require('react-router').History;
var AnswersIndexItem = React.createClass({

  mixins: [History],


  render: function() {

    return(
      <div className="single-answer group">
          <img className="answer-pic" src={this.props.answer.user.image_url} />
          <div className="answer-writer">{this.props.answer.user.username}</div>
          <div className="answer-description">{this.props.answer.user.description}</div><br/>
          <img className="answer-writer" src={this.props.answer.image_url}/>
          <div className="answer-body">{this.props.answer.title}</div>


      </div>
    );
  }
});

module.exports = AnswersIndexItem;
