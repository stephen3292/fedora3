var AppDispatcher = require('../dispatcher/dispatch');
var Store = require('flux/utils').Store;
var QuestionConstants = require('../constants/question_constants');
var _questions = {};

var questionStore = new Store(AppDispatcher);

questionStore.resetQuestions = function(questions){
  for (var i = 0; i < questions.length; i++) {
    _questions[questions[i].id] = questions[i];
  }
};

questionStore.resetQuestion = function(question){
  _questions[question.id] = question;
};

questionStore.all = function(){
  var result = [];
  for (var i in _questions) {
    result.push(_questions[i]);
  }
  return result;
};

questionStore.find = function(id) {
  return _questions[id];
};

questionStore.__onDispatch = function (payload) {

  switch(payload.actionType) {
    case QuestionConstants.QUESTIONS_RECEIVED:
      questionStore.resetQuestions(payload.questions);
      break;
    case QuestionConstants.QUESTION_RECEIVED:
      questionStore.resetQuestion(payload.question);
      break;
  }
  questionStore.__emitChange();
};

module.exports = questionStore;
