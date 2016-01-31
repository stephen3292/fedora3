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
        questions.push(
          <li key={question.id}>{question.title }</li>
        );
      });
    }

    return (
      <div className="homepage">
        <header>
          <h1 className="nav-logo">Fedora</h1>
          <h1 className="title">Logged in as: { user.username }</h1>
          <img className="post-image" src={this.state.user.image_url} />
        </header>
        <div className="my-questions">My Questions:{questions}</div>
        <a href="#/">All Questions:</a>
        < QuestionsIndex />
      </div>
    );
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  }
});

module.exports = UserShow;
