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

  createTag: function (title, questionId) {
    debugger
    var coolName = title.questionId;
    $.ajax({
      type: "post",
      url: "api/questions/" + coolName + "/question_tags",
      dataType: "json",
      processData: false,
      contentType: false,
      data: title,
      success: function(data) {
        TagActions.receiveSingleTag(data);
      }

    });
  }
};

module.exports = tagApiUtil;
