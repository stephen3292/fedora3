var React = require('react');
var CommentsIndexItem = require('./comments_index_item');
var CommentForm = require('./comment_form');


var CommentsIndex = React.createClass({

  render: function(){
    var answerId = this.props.answer.id;
    var comments = this.props.answer.comments.map(function (comment) {

      return <CommentsIndexItem comment={comment} key={comment.id}/>;
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

module.exports = CommentsIndex;
