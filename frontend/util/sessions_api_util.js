var CurrentUserActions = require("./../actions/current_user_actions");
var SessionsApiUtil = {
  login: function (credentials, success) {
    $.ajax({
      url: '/api/session',
      type: 'POST',
      dataType: 'json',
      processData: false,
      contentType: false,
      data: credentials,
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      }

    });
  },

  logout: function (callback) {
    $.ajax({
      url: '/api/session',
      type: 'POST',
      method: 'DELETE',
      dataType: 'json',
      success: function () {
        CurrentUserActions.userLogOut();
        callback && callback();
      }
    });
  },

  fetchCurrentUser: function (cb) {
    $.ajax({
      url: '/api/session',
      type: 'GET',
      dataType: 'json',
      success: function (currentUser) {
        console.log("fetched current user!");
        CurrentUserActions.receiveCurrentUser(currentUser);
        cb && cb(currentUser);
      }
    });
  }


};

module.exports = SessionsApiUtil;
