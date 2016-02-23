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


    console.log()

    debugger
    CommentsApiUtil.createOneComment(formData, questionId, answerId);
    this.props.collapse
  },




  render: function(){
    var pic;
    var writer;
    var title;
    var submit;

    if (!this.props.parent_comment){
      pic = <img className="comment-pic" src={this.state.currentUser.image_url} />
      writer = <div className="comment-writer">{this.state.currentUser.username}</div>
      input = <input className="c-form-title" typeplaceholder="Answer" onInput={this.updateBody} ></input>
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
