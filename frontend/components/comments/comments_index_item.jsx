var React = require('react');
var History = require('react-router').History;
var CommentForm = require('./comment_form');

var CommentsIndexItem = React.createClass({

  mixins: [History],

  getInitialState: function(){
    return (
      {form: true}
    );
  },

  toggleState: function(){
    this.setState({form: !this.state.form});
  },

  collapseForm: function(){
    this.setState({index: form});
  },


  render: function() {


    var showForm;
    var showForm = this.state.form ? < CommentForm collapse={this.collapseForm} answerId={this.props.comment} parent_comment={this.props.comment}/>
    : "";

    return(
      <div className="single-comment group">
          <div className="comment-header">_
            <img className="comment-pic" src={this.props.comment.user.image_url} />
            <div className="lil-comment-writer">{this.props.comment.user.username}</div>
          </div>
          <div className="comment-body">{this.props.comment.body}</div>
          < CommentForm collapse={this.collapseForm} answerId={this.props.comment} parent_comment={this.props.comment}/>


      </div>
    );
  }
});

module.exports = CommentsIndexItem;
