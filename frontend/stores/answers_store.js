var AppDispatcher = require('../dispatcher/dispatch');
var Store = require('flux/utils').Store;
var CommentConstants = require('../constants/comment_constants');
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

answerStore.addComment = function(comment){
  debugger
  var answer = _answers[comment.answer_id];

  answer.comments.push(comment)
};

answerStore.__onDispatch = function (payload) {

  switch(payload.actionType) {
    case AnswerConstants.ANSWERS_RECIEVED:
      answerStore.resetAnswers(payload.answers);
      break;
    case AnswerConstants.ANSWER_RECEIVED:
      answerStore.resetAnswer(payload.answer);
      break;
    // case CommentConstants.COMMENT_RECEIVED:
    //   answerStore.addComment(payload.comment)
    //   break;

  }

  answerStore.__emitChange();
};

module.exports = answerStore;
