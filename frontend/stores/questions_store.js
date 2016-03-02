var AppDispatcher = require('../dispatcher/dispatch');
var Store = require('flux/utils').Store;
var QuestionConstants = require('../constants/question_constants');
var AnswerConstants = require('../constants/answer_constants');
var CommentConstants = require('../constants/comment_constants');
var VoteConstants = require('../constants/vote_constants');
var TagConstants = require('../constants/tag_constants');
var _questions = {};
var TagsStore = require('./tags_store');

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

questionStore.resetAnswer = function(answer){
  var question = _questions[answer.question_id];
  
  for (var i = 0; i < question.answers.length; i++) {
    if (answer.id === question.answers[i].id){
      question.answers[i] = answer;
    };
  };
};

questionStore.addTag = function(tag, questionId) {
  var question = _questions[questionId];
  question.question_tags = question.question_tags.concat(tag);
};

questionStore.addComment = function(comment){
  var question = _questions[comment.question_id]
  var answerId
  for (var i = 0; i < question.answers.length; i++) {
    if (question.answers[i].id === comment.answer_id && (!comment.parent_comment_id)){
      question.answers[i].comments.push(comment)
    } else {
      for (var j = 0; j < question.answers[i].comments.length; j++) {
        debugger
        if (question.answers[i].comments[j].id === comment.parent_comment_id){
          question.answers[i].comments[j].comments.push(comment)
        }
      }
    }
  }

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
      questionStore.addTag(payload.tag, payload.questionId);
      break;
    case CommentConstants.COMMENT_RECEIVED:
      questionStore.addComment(payload.comment);
      break;
    case VoteConstants.VOTE_RECEIVED:
      questionStore.resetAnswer(payload.vote);
      break;
  }
  questionStore.__emitChange();
};

module.exports = questionStore;
