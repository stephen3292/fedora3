var React = require('react');
var History = require('react-router').History;
var CommentRepliesIndex = require('./comment_replies_index');


var CommentsIndexItem = React.createClass({

  mixins: [History],

  getInitialState: function(){
    return (
      {form: false}
    );
  },

  toggleState: function(){
    this.setState({form: !this.state.form});
  },

  collapseForm: function(){
    this.setState({index: form});
  },


  render: function() {

    return(
      <div className="single-comment group">
          <div className="comment-header group">
            <img className="comment-pic" src={this.props.comment.user.image_url} />
            <div className="lil-comment-writer">{this.props.comment.user.username}</div>
          </div>
          <div className="comment-body">{this.props.comment.body}</div>
      </div>
    );
  }
});

module.exports = CommentsIndexItem;
