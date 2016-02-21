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

  componentWillReceiveProps: function(){

  },

  updateBody: function(e){
    this.setState({body: e.currentTarget.value});
  },

  handleSubmit: function(e){
    e.preventDefault();

    var formData = new FormData();
    formData.append("comment[body]", this.state.body);
    if (this.props.parent_comment){
      formData.append("comment[parent_comment_id]", this.props.parent_comment.id)
      formData.append("comment[answer_id]", this.props.parent_comment.answer_id)
    } else if (this.props.answer) {
      formData.append("comment[answer_id]", this.props.answer.id);
    }

    var questionId = this.props.answer.question_id;
    var answerId = this.props.answer.id;

    CommentsApiUtil.createOneComment(formData, questionId, answerId);
    this.props.collapse
  },




  render: function(){

    return(
      <div className="comment-box">

        <img className="comment-pic" src={this.state.currentUser.image_url} />
        <div className="comment-writer">{this.state.currentUser.username}</div>
        <input className="c-form-title" typeplaceholder="Answer" onInput={this.updateBody} ></input>
        <button className="c-form-submit" onClick={this.handleSubmit}>Comment</button>
      </div>
    )

  }
});


module.exports = CommentForm;
