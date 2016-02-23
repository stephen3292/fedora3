var React = require('react');
var CommentRepliesIndexItem = require('./comment_replies_index_item');


var CommentRepliesIndex = React.createClass({

  render: function(){
    var answerId = this.props.answer.id;
    var comments = this.props.answer.comments.map(function (comment) {

      return <CommentRepliesIndexItem comment={comment} key={comment.id}/>;
    });

    return(
      <div className="answer-list">
        <div className="comments-list">
          {comments}
        </div>
      </div>
    )
  }

});

module.exports = CommentRepliesIndex;
