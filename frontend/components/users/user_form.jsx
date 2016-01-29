var React = require('react');
var History = require('react-router').History;
var UsersStore = require('../../stores/users_store');
var UsersApiUtil = require('../../util/users_api_util');

var UserForm = React.createClass({
  mixins: [History],

  submit: function (e) {
    e.preventDefault();
  },

  render: function() {

    return (
      <form onSubmit={ this.submit }>

        <h1>Sign Up!</h1>

        <label>
          Username
          <input type="text" name="username" />
        </label>

        <label>
          Password
          <input type="password" name="password" />
        </label>

        <label>
          About
          <input type="text" name="description" />
        </label>

        <button>Join!</button>
      </form>
    );
  },

});

module.exports = UserForm;
