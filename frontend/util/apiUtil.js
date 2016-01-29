var AppDispatcher = require('../dispatcher/dispatch');
var QuestionActions = require('../actions/questionActions');
var QuestionsStore = require('../stores/questionStore');


var questionApiUtil = {
  fetchAllQuestions: function(){
    console.log("running");
    $.ajax({
      type: "get",
      url: "api/questions",
      dataType: "json",
      success: function(data) {
        QuestionActions.receiveAllQuestions(data);
      }

    });
  },

  fetchOneQuestion: function (id) {
    $.ajax({
      type: "get",
      url: "api/questions/" + id,
      dataType: "json",
      success: function(data) {
        QuestionActions.receiveSingleQuestion(data);
      }
    });
  },

  createQuestion: function(formData) {
    $.ajax({
      type: "post",
      url: "api/questions",
      processData: false,
      contentType: false,
      dataType: "json",
      data: formData,
      success: function(data) {
        QuestionActions.receiveSingleQuestion(data);
      }
    });
  }





};

module.exports = questionApiUtil;
