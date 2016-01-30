var AppDispatcher = require('../dispatcher/dispatch');
var AnswerActions = require('../actions/answer_actions');
// var AnswerStore = require('../stores/answer_store');

var answerApiUtil = {
  fetchQuestionAnswers: function(questionId) {
    console.log("running");
    $.ajax({
      type: "get",
      url: "api/questions/" + questionId + "/answers",
      dataType: "json",
      success: function(data) {
        AnswerActions.receiveQuestionAnswers(data);
      }
    });
  },

  createOneAnswer: function (formData, questionId) {
    $.ajax({
      type: "post",
      url: "api/questions/" + questionId + "/answers",
      dataType: "json",
      processData: false,
      contentType: false,
      data: formData,
      success: function(data) {
        console.log('got it!');
      }

    });
  }
};

module.exports = answerApiUtil;
