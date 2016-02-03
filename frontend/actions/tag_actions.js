
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

  receiveSingleTag: function(tag, questionId) {
    AppDispatcher.dispatch({
      actionType: TagConstants.TAG_RECEIVED,
      tag: tag,
      questionId: questionId
    });
  }

};

module.exports = tagActions;
