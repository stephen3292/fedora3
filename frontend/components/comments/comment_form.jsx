var React = require('react');
var CurrentUserStore = require('./../../stores/current_user_store.js');
var CommentsApiUtil = require('./../../util/comments_api_util.js');
var CommentForm = React.createClass({
  getInitialState: function(){
    return {body: "", currentUser: this.getStateFromStore()};
  },

  getStateFromStore: function () {
    return ( CurrentUserStore.currentUser());
  },

  updateBody: function(e){
    this.setState({body: e.currentTarget.value});
  },

  handleKeyPress: function(e){
    if (e.key === 'Enter'){
      this.handleSubmit(e);
    }
  },

  handleSubmit: function(e){
    e.preventDefault();

    var formData = new FormData();
    formData.append("comment[body]", this.state.body);

    if (this.props.parent_comment){
      formData.append("comment[parent_comment_id]", this.props.parent_comment.id)
      formData.append("comment[answer_id]", this.props.parent_comment.answer_id);
    }

    var answerId
    var questionId
    if (this.props.answer){
      questionId = this.props.answer.question_id
      answerId = this.props.answer.id
      formData.append("comment[answer_id]", this.props.answer.id)
    } else {
      questionId = this.props.parent_comment.question_id
      answerId = this.props.parent_comment.answer_id
    }

    CommentsApiUtil.createOneComment(formData, questionId, answerId);
    this.resetCForm();

  },

  resetCForm: function() {
    this.setState({body: ""});
  },

  render: function(){
    var pic;
    var writer;
    var title;
    var submit;

    if (!this.props.parent_comment){
      pic = <img className="comment-pic" src={this.state.currentUser.image_url} />
      writer = <div className="comment-writer">{this.state.currentUser.username}</div>
      input = <input className="c-form-title" onKeyPress={this.handleKeyPress} typeplaceholder="Answer" onInput={this.updateBody} value={this.state.body}></input>
    }
    return(
      <div className="comment-box">
        {pic}
        {writer}
        {input}
        <button className="c-form-submit" onClick={this.handleSubmit}>Comment</button>
      </div>
    )

  }
});


module.exports = CommentForm;
