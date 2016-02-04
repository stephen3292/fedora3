var AppDispatcher = require('../dispatcher/dispatch');
var TagActions = require('../actions/tag_actions');


var tagApiUtil = {
  fetchQuestionTags: function(questionId) {

    $.ajax({
      type: "get",
      url: "api/questions/" + questionId + "/question_tags",
      dataType: "json",
      success: function(data) {
        console.log(data);
        TagActions.receiveAllTags(data);
      }
    });
  },

  fetchOneTag: function(id) {
    $.ajax({
      type: "get",
      url: "api/question_tags/" + id,
      dataType: "json",
      success: function(data) {

        TagActions.receiveSingleTag(data);
      }
    });
  },

  fetchOneShowTag: function(id) {
    $.ajax({
      type: "get",
      url: "api/question_tags/" + id,
      dataType: "json",
      success: function(data) {
        TagActions.receiveShowTag(data);
      }
    });
  },

  createTag: function (title, questionId) {
    var coolName = title.questionId;
    $.ajax({
      type: "post",
      url: "api/questions/" + coolName + "/question_tags",
      dataType: "json",
      data: title,
      success: function(data) {

        TagActions.receiveSingleTag(data, coolName);
      }

    });
  }
};

module.exports = tagApiUtil;
