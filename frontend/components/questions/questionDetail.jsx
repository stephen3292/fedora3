var React = require('react');
var questionsStore = require('./../../stores/questions_store');
var questionApiUtil = require('./../../util/apiUtil.js');



var questionDetail = React.createClass({

  getStateFromStore: function() {

    return questionStore.find(parseInt(this.props.params.questionId));
  },

  getInitialState: function() {
    return (
      {question: this.getStateFromStore()}
    );
  },

  _onChange: function() {
    this.setState({question: this.getStateFromStore()});
  },

  componentDidMount: function() {
    questionStore.addListener(this._onChange);
  },

  componentWillReceiveProps: function (newProps) {
    var id = parseInt(newProps.params.questionId);
    var question = apiUtil.fetchOneQuestion(id);
    this.setState({question: question});
  },

  render: function() {
    if (this.state.question) {
      return(
        <div>
          <div className="question-detail-pane">
            <div className="question-detail-each">

              {this.state.question.title}<br/>
              {this.state.question.body}<br/>
              {this.state.question.username}<br/>
              {this.state.question.user_id}<br/>
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div>Error</div>
      );
    }


  }

});

module.exports = questionDetail;
