var React = require('react');
var CurrentUserStore = require('../stores/current_user_store');
var AskForm = require('../components/questions/questionForm');
var SessionsApiUtil = require('../util/sessions_api_util');
// var LongAskForm = require('../components/')
var History = require('react-router').History;

var Header = React.createClass({

  getInitialState: function () {
    return {
      currentUser: {}
    };
  },

  componentDidMount: function () {
    CurrentUserStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  logout: function () {
    SessionsApiUtil.logout();
  },

  render: function() {
    if (CurrentUserStore.isLoggedIn()) {

      var answerQuestions = '#/questions';
      var readQuestions = '#/read';
      var user_home_page = '/';
      return (
        <header className="top-header">
          <div className="header-nav group">
            <h1 className="fedora-logo"><a className="home-link" href={user_home_page}>Fedora</a></h1>

            <div className='ask-form'><AskForm/></div>
            <div className="header-username">{ this.state.currentUser.username }</div>
            <img className="header-image" src={this.state.currentUser.image_url} />
              <ul className="nav-links group">
                <li className="nav-link">Notifications</li>
                <li className="nav-link"><a className="user-questions-link" href={answerQuestions}>Answer</a></li>
                <li className="nav-link"><a className="user-read-link" href={readQuestions}>Read</a></li>
              </ul>
            <button className="sign-out-button" onClick={ this.logout }>Sign Out</button>
          </div>
        </header>
      );
    } else {
      return (
        <div>
          <a href="#/login">LOGIN</a>
        </div>
      );
    }

  },

});

module.exports = Header;
