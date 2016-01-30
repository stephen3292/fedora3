var React = require('react');
var History = require('react-router').History;
var AnswersIndexItem = React.createClass({

  mixins: [History],


  render: function() {

    return(
      <li>
        answers will go here
      </li>
    );
  }
});

module.exports = AnswersIndexItem;
