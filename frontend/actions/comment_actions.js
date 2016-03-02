
var AppDispatcher = require('../dispatcher/dispatch.js');
var CommentConstants = require('../constants/comment_constants.js');


var commentActions = {

  receiveAllComments: function(comments) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENTS_RECEIVED,
      comments: comments,

    });
  },

  receiveSingleComment: function(comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECEIVED,
      comment: comment,
    });
  }

};

module.exports = commentActions;
