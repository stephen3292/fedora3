var React = require('react');
var CurrentUserStore = require('../stores/current_user_store');
var AskForm = require('../components/questions/questionForm');
var SessionsApiUtil = require('../util/sessions_api_util');
var LongAskForm = require('../components/questions/questionLongForm');
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
      var askQuestions = '#/ask';
      var search = '#/search';
      var answer ='#/answer';

      return (
        <header className="top-header">
          <div className="header-nav group">
            <h1 className="fedora-logo"><a className="home-link" href={user_home_page}>Fedora</a></h1>

            <div className='ask-form'><AskForm/></div>
            <div className="header-username"><a href={askQuestions}>{this.state.currentUser.username }</a></div>
            <button className="sign-out-button" onClick={ this.logout }></button>
            <img className="header-image" src={this.state.currentUser.image_url}></img>
              <ul className="nav-links group">
                <li className="nav-link"><a className="user-questions-link" href={answer}>Answer</a></li>
                <li className="nav-link"><a className="user-read-link" href={readQuestions}>Read</a></li>
                <li className="nav-link"><a className="user-ask-link" href={search}>Notifications</a></li>
              </ul>

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
