var React = require('react');
var TagStore = require('./../../stores/tags_store');
var TagsApiUtil = require('./../../util/tags_api_util.js');
var QuestionsReadIndexItem = require('./../../components/questions/questionsReadIndexItem');


var tagShow = React.createClass({

  getStateFromStore: function () {
    return ( TagStore.find(parseInt(this.props.params.tagId)));
  },

  getInitialState: function(){
    return ({tag: this.getStateFromStore()});
  },

  _onChange: function(){
    this.setState({tag: this.getStateFromStore()});
  },

  componentDidMount: function(){
    this.listener = TagStore.addListener(this._onChange);
    TagsApiUtil.fetchOneShowTag(parseInt(this.props.params.tagId));
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },

  componentWillReceiveProps: function(props) {
    var id = parseInt(props.params.tagId);
    TagsApiUtil.fetchOneShowTag(id);
    },

  render: function() { {
    if (this.state.tag) {
      var questions = this.state.tag.questions.map( function(question) {
        return <QuestionsReadIndexItem question={question} key={question.id}/>;
      });
    }
    return(
        <div className="tag-show">
          {questions}
        </div>
      );
    }
  }

});

module.exports = tagShow;
