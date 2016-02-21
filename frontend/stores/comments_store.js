var AppDispatcher = require('../dispatcher/dispatch');
var Store = require('flux/utils').Store;
var CommentConstants = require('../constants/comment_constants');
var comments = {};


var commentStore = new Store(AppDispatcher);

commentStore.resetComments = function(comments){
  comments = {};
  for (var i = 0; i < comments.length; i++) {
    var answerId = comments[i].answer_id;
    var commentArray = _comments[answerId];
    commentArray = commentArray || [];
    commentArray.push(comments[i]);
  }
};

commentStore.resetComment = function(comment){
  _comments[commend.id] = comment;
};

commentStore.all = function(answerId){
  var comments = _comments[answerId] || [];
  return comments.slice();
};

commentStore.find = function(id) {
  return _comments[id]
};

commentStore.__onDispatch = function (payload){
  switch(payload.actionType) {
    case CommentConstants.COMMENTS_RECEIVED;
      commentStore.resetComments(payload.comments);
      break;
    case CommentConstants.COMMENT_RECEIVED;
      commentStore.resetComment(payload.comment);
      break;
  }

  commentStore.__emitChange();
};

module.exports = commentStore;
