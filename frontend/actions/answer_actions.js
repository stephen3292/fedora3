
var AppDispatcher = require('../dispatcher/dispatch.js');
var AnswerConstants = require('../constants/answer_constants.js');
var AnswerStore = require('../stores/answers_store.js');

var answerActions = {

  receiveAllAnswers: function(answers) {
    AppDispatcher.dispatch({
      actionType: AnswerConstants.ANSWERS_RECEIVED,
      answers: answers,
    });
  },

  receiveSingleAnswer: function(question) {
    AppDispatcher.dispatch({
      actionType: AnswerConstants.ANSWER_RECEIVED,
      answer: answer,
    });
  }

};

module.exports = answerActions;
