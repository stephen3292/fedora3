// var AppDispatcher = require('../dispatcher/dispatch');
// var Store = require('flux/utils').Store;
// var AnswerConstants = require('../constants/answerConstants');
// var _answers = {};
//
// var answerStore = new Store(AppDispatcher);

answerStore.resetAnswers = function(answers){
  for (var i = 0; i < answers.length; i++) {
    _answers[answers[i].id] = answers[i];
  }
};

answerStore.resetAnswer = function(answer){
  _answers[answer.id] = answer;
};

answerStore.all = function(){
  var result = [];
  for (var i in _answers) {
    result.push(_answers[i]);
  }
  return result;
};

answerStore.find = function(id) {
  return _answers[id];
};

answerStore.__onDispatch = function (payload) {

  switch(payload.actionType) {
    case AnswerConstants.ANSWERS_RECIEVED:
      answerStore.resetAnswers(payload.answers);
      break;
    case AnswerConstants.ANSWER_RECEIVED:
      answerStore.resetAnswer(payload.answer);
      break;
  }
  answerStore.__emitChange();
};

module.exports = answerStore;
