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
    var coolId = title.questionId;
    var coolName = title.name;
    debugger
    $.ajax({
      type: "post",
      url: "api/questions/" + coolId + "/question_tags",
      dataType: "json",
      processData: false,
      contentType: false,
      data: coolName,
      success: function(data) {
        TagActions.receiveSingleTag(data);
      }

    });
  }
};

module.exports = tagApiUtil;
