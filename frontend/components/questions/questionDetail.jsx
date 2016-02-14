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
    var id = parseInt(this.props.params.questionId);
    questionApiUtil.fetchOneQuestion(id);
  },

  componentWillReceiveProps: function (newProps) {
    var id = parseInt(newProps.params.questionId);
    var question = questionApiUtil.fetchOneQuestion(id);
    this.setState({question: question});
  },

  render: function() {

    if (this.state.question) {
      debugger
      return(
        <div>
          <h2 className='detail-title'>Question Detail</h2>
          <div className="question-detail-pane">
            <div className="question-detail-each group">
              <div className='detail-asker'>{this.state.question.user.username}</div>
              <div className='detail-info'>{this.state.question.user.description}</div>
              <img className="detail-image" src={this.state.question.user.image_url} />
            </div>
                <br/>
              <div className="little-detail group">
                <br/>
                  {this.state.question.title}<br/>
                  <div className="q-detail-body">{this.state.question.body}</div>
                  <img className="q-detail-image" src={this.state.question.image_url}/>
              </div>
              </div>
              <div className="detail-answers">
                  < AnswersIndex question={this.state.question}/>
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
