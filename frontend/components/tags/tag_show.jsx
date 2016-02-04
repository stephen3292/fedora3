var React = require('react');
var TagStore = require('./../../stores/tags_store');
var TagsApiUtil = require('./../../util/tags_api_util.js');
var QuestionsIndexItem = require('./../../components/questions/QuestionsIndexItem');


var tagShow = React.createClass({

  getInitialState: function(){
    return this.getStateFromStore();
  },

  getStateFromStore: function () {

    return {
      tag: TagStore.everyTag()
    };
  },

  componentDidMount: function(){
    this.listener = TagStore.addListener(this._onChange);
    TagsApiUtil.fetchOneShowTag(parseInt(this.props.params.tagId));
    debugger
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  render: function() { {
    // var question = this.state.tag.questions.map( function(question) {
    //   return <QuestionsIndexItem question={question} key={question.id}/>;
    // });
      return(

        <div>
          question1
        </div>
      );
    }
  }

});

module.exports = tagShow;
