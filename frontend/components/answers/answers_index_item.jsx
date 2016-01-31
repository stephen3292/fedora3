var React = require('react');
var History = require('react-router').History;
var AnswersIndexItem = React.createClass({

  mixins: [History],


  render: function() {

    return(
      <li className="single-answer">
        {this.props.answer.title}<br/>
        {this.props.answer.username}
      </li>
    );
  }
});

module.exports = AnswersIndexItem;
