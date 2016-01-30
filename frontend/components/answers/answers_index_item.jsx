var React = require('react');
var History = require('react-router').History;
var AnswersIndexItem = React.createClass({

  mixins: [History],


  render: function() {

    return(
      <div>
        answers will go here
      </div>
    );
  }
});

module.exports = AnswersIndexItem;
