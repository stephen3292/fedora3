var React = require('react');
var History = require('react-router').History;
var AnswersIndexItem = React.createClass({

  mixins: [History],


  render: function() {

    return(
      <li>
        hopefully....
      </li>
    );
  }
});

module.exports = AnswersIndexItem;
