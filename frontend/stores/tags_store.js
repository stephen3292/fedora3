var AppDispatcher = require('../dispatcher/dispatch');
var Store = require('flux/utils').Store;
var TagConstants = require('../constants/tag_constants');
var _tags = {};

var tagStore = new Store(AppDispatcher);

tagStore.resetTags = function(tags){
  _tags = {};
  for (var i = 0; i < tags.length; i++) {
    var tagId = tags[i].question_id;
    var tagArray = _tags[tagId];
    tagArray = tagArray || [];
    tagArray.push(tags[i]);
  }
};

tagStore.resetTag = function(tag){
  _tags[tag.id] = tag;
};

tagStore.all = function(questionId){
  var tags = _tags[questionId] || [];
  return tags.slice();
};

tagStore.everyTag = function(){
  var result = [];
  for (var i in _tags) {
    result.push(_tags[i]);
  }
  return result;
};

tagStore.find = function(id) {
  return _tags[id];
};

tagStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case TagConstants.TAGS_RECEIVED:
      tagStore.resetTags(payload.tags);
      break;
    case TagConstants.TAG_RECEIVED:
      tagStore.resetAnswer(payload.tag);
      break;

  }

  tagStore.__emitChange();
};

module.exports = tagStore;
