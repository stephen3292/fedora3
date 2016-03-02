var AppDispatcher = require('../dispatcher/dispatch.js');
var VoteConstants = require('../constants/vote_constants.js');


var voteActions = {

  receiveAllVotes: function(votes) {
    AppDispatcher.dispatch({
      actionType: VoteConstants.VOTES_RECEIVED,
      votes: votes,

    });
  },

  receiveSingleVote: function(vote) {
    AppDispatcher.dispatch({
      actionType: VoteConstants.VOTE_RECEIVED,
      vote: vote,
  });
}

};


module.exports = voteActions;
