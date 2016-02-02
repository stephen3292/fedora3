var AppDispatcher = require('../dispatcher/dispatch');
var CurrentUserConstants = require('../constants/current_user_constants');

var CurrentUserActions = {
  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: CurrentUserConstants.RECEIVE_CURRENT_USER,
      currentUser: currentUser
    });
  },
  userLogOut: function () {
  AppDispatcher.dispatch({
    actionType: CurrentUserConstants.USER_LOG_OUT,
  });
}
};

module.exports = CurrentUserActions;
