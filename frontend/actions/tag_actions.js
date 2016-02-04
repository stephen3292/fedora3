
var AppDispatcher = require('../dispatcher/dispatch.js');
var TagConstants = require('../constants/tag_constants.js');
var TagStore = require('../stores/tags_store.js');

var tagActions = {

  receiveAllTags: function(tags) {
    AppDispatcher.dispatch({
      actionType: TagConstants.TAGS_RECEIVED,
      tags: tags,

    });
  },

  receiveShowTag: function(tag){
    AppDispatcher.dispatch({
      actionType: TagConstants.SHOW_TAG_RECEIVED,
      tag: tag
    });
  },

  receiveSingleTag: function(tag, questionId) {
    AppDispatcher.dispatch({
      actionType: TagConstants.TAG_RECEIVED,
      tag: tag,
      questionId: questionId
    });
  }

};

module.exports = tagActions;
