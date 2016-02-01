var AppDispatcher = require('../dispatcher/dispatch');
var Store = require('flux/utils').Store;
var AnswerConstants = require('../constants/answer_constants');
var _answers = {};

var answerStore = new Store(AppDispatcher);

answerStore.resetAnswers = function(answers){
  _answers = {};
  for (var i = 0; i < answers.length; i++) {
    var questionId = answers[i].question_id;
    var answerArray = _answers[questionId];
    answerArray = answerArray || [];
    answerArray.push(answers[i]);
  }
};

answerStore.resetAnswer = function(answer){
  _answers[answer.id] = answer;
};

answerStore.all = function(questionId){
  var answers = _answers[questionId] || [];
  return answers.slice();
};

answerStore.find = function(id) {
  return _answers[id];
};

answerStore.__onDispatch = function (payload) {
  debugger
  switch(payload.actionType) {
    case AnswerConstants.ANSWERS_RECIEVED:
      answerStore.resetAnswers(payload.answers);
      break;
    case AnswerConstants.ANSWER_RECEIVED:
      answerStore.resetAnswer(payload.answer);
      break;

  }

  console.log(payload.answer);
  answerStore.__emitChange();
};

module.exports = answerStore;
