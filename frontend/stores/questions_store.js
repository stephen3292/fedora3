var AppDispatcher = require('../dispatcher/dispatch');
var Store = require('flux/utils').Store;
var QuestionConstants = require('../constants/question_constants');
var AnswerConstants = require('../constants/answer_constants');
var TagConstants = require('../constants/tag_constants');
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

questionStore.addAnswer = function(answer){
  var question = _questions[answer.question_id];
  question.answers.push(answer);
};

questionStore.addTag = function(tag) {
  var question = _questions[tag.question_id];
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
    case AnswerConstants.ANSWER_RECEIVED:
      questionStore.addAnswer(payload.answer);
      break;
    case TagConstants.TAG_RECEIVED:
      tagStore.addTag(payload.tag);
      break;
    case TagConstants.TAGS_RECEIVED:
      tagStore.addTag(payload.tag);
      break;
  }
  questionStore.__emitChange();
};

module.exports = questionStore;
