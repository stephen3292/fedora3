var React = require('react');
var TagStore = require('./../../stores/tags_store');
var TagsApiUtil = require('./../../util/tags_api_util.js');
var QuestionsIndexItem = require('../questions/questionsIndexItem');



var tagShow = React.createClass({

  getStateFromStore: function() {
    return TagStore.find(parseInt(this.props.params.tagId));
  },

  getInitialState: function() {
    return (
      {tag: this.getStateFromStore()}
    );
  },

  componentDidMount: function() {
    TagsApiUtil.fetchOneTag(parseInt(this.props.params.tagId));
  },

  render: function() { {
  debugger
      return(
        <div>
          Hello!
        </div>
      );
    }
  }

});

module.exports = tagShow;
