
var AppDispatcher = require('../dispatcher/dispatch.js');
var QuestionConstants = require('../constants/question_constants.js');
var QuestionStore = require('../stores/questions_store.js');

var questionActions = {

  receiveAllQuestions: function(questions) {
    AppDispatcher.dispatch({
      actionType: QuestionConstants.QUESTIONS_RECEIVED,
      questions: questions,
    });
  },

  receiveSingleQuestion: function(question) {
    console.log('hi');
    AppDispatcher.dispatch({
      actionType: QuestionConstants.QUESTION_RECEIVED,
      question: question,
    });
  }

};

module.exports = questionActions;
