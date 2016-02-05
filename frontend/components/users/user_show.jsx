var React = require('react');
var SessionsApiUtil = require('../../util/sessions_api_util');
var CurrentUserStore = require('../../stores/current_user_store');
var QuestionsIndex = require('../questions/questionsIndex');

var UserShow = React.createClass({
  getInitialState: function() {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    return {
      user: CurrentUserStore.currentUser()
    };
  },

  componentDidMount: function() {
    this.listener = CurrentUserStore.addListener(this._onChange);
    SessionsApiUtil.fetchCurrentUser(this.props.params.id);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  render: function() {

    var user = this.state.user;
    if (!user) {
      return (
        <div>Uh Oh</div>
      );
    }

    var questions = [];
    if (user) {
      user.questions && user.questions.forEach(function (question) {
        var linkId = question.id;
        var link= "#/questions/" + linkId;

        questions.push(
         <li key={question.id}><a key={question.name} href={link}>{question.title}</a></li>
        );
      });
    }

    var tags = [];
    if (user) {
      user.question_tags && user.question_tags.forEach(function (tag) {
        var tagId = tag.id;
        var link= "#/question_tags/" + tagId;
        tags.push(
           <li key={tag.name}><a key={tag.name} href={link}>{tag.name }</a></li>
        );
      });
    }



    return (
      <div className="homepage group">
        <div className="my-name">{this.state.user.username + "'s Questions" }</div>
        <ul className="my-questions">{questions}</ul>
        <ul className="my-tags"><div className="my-name">{this.state.user.username + "'s Tags" }</div>{tags}</ul>
        <div className="some-questions">Top Questions</div>
        <div className="questions-index">< QuestionsIndex /></div>
      </div>
    );
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  }
});

module.exports = UserShow;
