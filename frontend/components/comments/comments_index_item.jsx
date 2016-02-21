var React = require('react');
var History = require('react-router').History;
var CommentForm = require('./comment_form');

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


    var showForm;
    var showForm = this.state.form ? < CommentForm collapse={this.collapseForm} answer={this.props.answer} parent/>
    : "";

    return(
      <div className="single-answer group">
          <div className="answer-writer">{this.props.comment.user.username}</div>
          <div className="answer-body">{this.props.comment.body}</div>
          <button className='a-form-button' onClick={this.toggleState}>Reply</button><br/>
          {showForm}

      </div>
    );
  }
});

module.exports = CommentsIndexItem;