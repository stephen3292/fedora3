var React = require('react');
var CurrentUserStore = require('../stores/current_user_store');

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

  },

  render: function() {
    if (CurrentUserStore.isLoggedIn()) {

      var answerQuestions = '#/questions';
      var user_home_page = '/';
      return (
        <header className="top-header">
          <div className="header-nav group">
            <h1 className="fedora-logo"><a className="home-link" href={user_home_page}>Fedora</a></h1>
            <input className="search" placeholder="Ask or Search Fedora"></input>
            <button className="search-button">Ask Question</button>
            <div className="header-username">{ this.state.currentUser.username }</div>
            <img className="header-image" src={this.state.currentUser.image_url} />
              <ul className="nav-links group">
                <li className="nav-link">Read</li>
                <li className="nav-link"><a className="user-questions-link" href={answerQuestions}>Answer</a></li>
                <li className="nav-link">Notifications</li>
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
