
var React = require('react');
var AnswersIndexItem = require('./answers_index_item.jsx');
var AnswerForm = require('./answer_form');
var CurrentUserStore = require('../../stores/current_user_store');
 AnswerApiUtil = require('./../../util/answers_api_util');




var AnswersIndex = React.createClass({

  getInitialState: function(){
    return (
      {form: false}
    );
  },

  toggleState: function(){
    this.setState({form: !this.state.form});
  },

  collapseForm: function(){
    this.setState({form: false});
  },

  render: function() {

    var answers = this.props.question.answers.map(function (answer) {
      return <AnswersIndexItem answer={answer} key={answer.id}/>;
    });

    var showForm = this.state.form ? < AnswerForm collapse={this.collapseForm} question={this.props.question}/>
    : "";


    return(
      <div>
        <div className="answer-list">
          {answers}
        </div>
        <button className='a-form-button' onClick={this.toggleState}>Write Answer</button><br/>
        {showForm}

      </div>
    );
  }

});

module.exports = AnswersIndex;
