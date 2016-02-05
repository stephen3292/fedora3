var React = require('react');
var questionsStore = require('./../../stores/questions_store');
var questionApiUtil = require('./../../util/apiUtil.js');
var AnswersIndex = require('../answers/answers_index');



var questionDetail = React.createClass({

  getStateFromStore: function() {
    return questionsStore.find(parseInt(this.props.params.questionId));
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
    questionsStore.addListener(this._onChange);
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
              <div className="little-detail">
              {this.state.question.title}<br/>
              {this.state.question.body}<br/>
              {this.state.question.username}<br/>
              </div>
              <img className="post-image" src={this.state.question.image_url} />
              <div className="detail-answers">
                  < AnswersIndex question={this.state.question}/>
              </div>

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
