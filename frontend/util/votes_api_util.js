var AppDispatcher = require('../dispatcher/dispatch');
var VoteActions = require('../actions/vote_actions');
var votesApiUtil = {
  upvote: function(questionId, answerId){
    $.ajax({
      type: "post",
      url: "api/questions/" + questionId + "/answers/" + answerId + "/upvote",
      dataType: "json",
      success: function(data) {
        VoteActions.receiveSingleVote(data)
      }
    });
  },

  downvote: function(questionId, answerId){
    $.ajax({
      type: "post",
      url: "api/questions/" + questionId + "/answers/" + answerId + "/downvote",
      dataType: "json",
      success: function(data) {
        VoteActions.receiveSingleVote(data)
      }
    });
  }

};


module.exports = votesApiUtil;
