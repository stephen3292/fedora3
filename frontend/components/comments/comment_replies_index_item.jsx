var React = require('react');
var History = require('react-router').History;

var CommentReplyIndexItem = React.createClass({

  mixins: [History],


  render: function() {
    var replyBody = this.props.comment.body
    return(
      <div className="single-tag">
        {replyBody}
      </div>
    );
  }
});

module.exports = CommentReplyIndexItem;
