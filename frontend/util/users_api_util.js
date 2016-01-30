var UserActions = require('../actions/user_actions');

var UsersApiUtil = {
  fetchUsers: function () {
    $.ajax({
      url: '/api/users',
      type: 'GET',
      dataType: 'json',
      success: function (users) {
        UserActions.receiveUsers(users);
      }
    });
  },

  fetchUser: function (id) {

    $.ajax({
      url: '/api/users/' + id,
      type: 'GET',
      dataType: 'json',
      success: function (user) {
        UserActions.receiveUser(user);
      }
    });
  },

  createUser: function (attrs, callback) {
    $.ajax({
      url: '/api/users',
      type: 'POST',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: attrs,
      success: function (user) {
        // UserActions.receiveUser(user);
        // UserActions.receive(user)
        // callback && callback();
      }
    });
  }
};


module.exports = UsersApiUtil;
