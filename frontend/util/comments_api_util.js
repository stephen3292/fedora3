var AppDispatcher = require('../dispatcher/dispatch');
var CommentActions = require('../actions/comment_actions');

var commentsApiUtil = {
  fetchQuestionComments: function(questionId, answerId) {
    console.log("running");
    $.ajax({
      type: "get",
      url: "api/questions/" + questionId + "/answers" + answerId + "/comments",
      dataType: "json",
      success: function(data) {
        console.log(data);
        CommentActions.receiveAllComments(data);
      }
    });
  },

  createOneComment: function (formData, questionId, answerId) {
    debugger
    $.ajax({
      type: "post",
      url: "api/questions/" + questionId + "/answers/" + answerId + "/comments",
      dataType: "json",
      processData: false,
      contentType: false,
      data: formData,
      success: function(data) {
        CommentActions.receiveSingleComment(data);
      }

    });
  }
};

module.exports = commentsApiUtil;
