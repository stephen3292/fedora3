var React = require('react');
var History = require('react-router').History;
var AnswersIndexItem = React.createClass({

  mixins: [History],


  render: function() {

    return(
      <div className="single-answer">
        <ul>
          <li className="answer-writer"/>{this.props.answer.username}<br/>
          <li className="answer-body"/>{this.props.answer.title}

        </ul>

      </div>
    );
  }
});

module.exports = AnswersIndexItem;
