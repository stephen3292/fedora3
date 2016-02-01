var React = require('react');
var History = require('react-router').History;
var AnswersIndexItem = React.createClass({

  mixins: [History],


  render: function() {

    return(
      <div className="single-answer">
        {this.props.answer.title}<br/>
        {this.props.answer.username}
      </div>
    );
  }
});

module.exports = AnswersIndexItem;
