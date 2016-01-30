var React = require('react');
var History = require('react-router').History;
var SessionsApiUtil = require('./../../util/sessions_api_util');
var UserForm = require('../users/user_form');

var SessionForm = React.createClass({
  mixins: [History],

  getInitialState: function(){
    return { username: "", password: ""};
  },

  updateUsername: function(e){
    this.setState({username: e.currentTarget.value});
  },

  updatePassword: function(e){
    this.setState({password: e.currentTarget.value});
  },

  changeFile: function(e) {
  var reader = new FileReader();
  var file = e.currentTarget.files[0];

    reader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: reader.result});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file); // will trigger a load end event when it completes, and invoke reader.onloadend
    } else {
      this.setState({imageFile: null, imageUrl: ""});
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var formData = new FormData();
    formData.append("user[username]", this.state.username);
    formData.append("user[password]", this.state.password);
  
    SessionsApiUtil.login(formData);
  },

  render: function() {

    return (
      <div className="new-user-form">
      < UserForm />
      <form onSubmit={ this.handleSubmit }>
      <h1>Sign In!</h1>
        <label>
          Username
          <input onInput={this.updateUsername} value={this.state.username}></input>
        </label>

        <label>
          Password
          <input type="password" onInput={this.updatePassword} value={this.state.password}></input>
        </label>

        <button>Sign In!</button>

      </form>

      </div>
    );
  },

});

module.exports = SessionForm;
