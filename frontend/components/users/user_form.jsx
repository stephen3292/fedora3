var React = require('react');
var History = require('react-router').History;
var UserApiUtil = require('../../util/users_api_util');

var UserForm = React.createClass({
  mixins: [History],

  getInitialState: function(){
    return { username: "", password: "", imageFile: null, imageUrl: "", description: ""};
  },

  updateUsername: function(e){
    this.setState({username: e.currentTarget.value});
  },

  updatePassword: function(e){
    this.setState({password: e.currentTarget.value});
  },

  updateDescription: function(e){
    this.setState({description: e.currentTarget.value});
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
    if (this.state.imageFile) {
      formData.append("user[avatar]", this.state.imageFile);
    } else {
      formData.append("user[avatar]", "");
    }
    formData.append("user[password]", this.state.password);
    formData.append("user[description]", this.state.description);
    UserApiUtil.createUser(formData, function(){
      this.history.pushState(null, "/");
    }.bind(this));
  },

  render: function() {
    return (
      <form className="sign-up-form" onSubmit={ this.handleSubmit }>
      <h1 className="sign-up-header">SIGNUP</h1>
        <label className="new-username-input">
          <input placeholder="Username" onInput={this.updateUsername} value={this.state.username}></input>
        </label>

        <label className="new-password-input">
          <input placeholder="Password" type="password" onInput={this.updatePassword} value={this.state.password}></input>
        </label>

        <label className="new-about-input">
          <input placeholder="About" onInput={this.updateDescription} value={this.state.description} />
        </label>

        <label className="new-avatar-input">
          Profile Picture
            <div className="hello-input"><input type="file" onChange={this.changeFile} /></div>
        </label>

        <button className="signup-button">Signup</button>

      </form>
    );
  },

});

module.exports = UserForm;
