var React = require('react');
var History = require('react-router').History;
var CommentForm = require('../comments/comment_form');
var CommentsIndex = require('../comments/comments_index');
var AnswersIndexItem = React.createClass({

  mixins: [History],

  getInitialState: function(){
    return (
      {index: false, form: false}
    );
  },

  toggleState: function(){
    this.setState({index: !this.state.index});
    this.setState({form: !this.state.form});
  },

  toggleForm: function(){
    this.setState({form: !this.state.form});
  },

  collapseIndex: function(){
    this.setState({index: false});
  },

  collapseForm: function(){
    this.setState({form: false});
  },


  render: function() {

    var image;
    if (this.props.answer.image_url.indexOf("missing") === -1){
      image = <img className="post-image" src={this.props.answer.image_url} />;
    }


    var showIndex;
    var showIndex = this.state.index ? < CommentsIndex collapse={this.collapseForm} answer={this.props.answer}/>
    : "";

    var length = this.props.answer.comments.length

    var showButton;
    if (length > 1){
      showButton = <button className='c-form-button' onClick={this.toggleState}>Comments {length} </button>
    } else if (length == 1) {
      showButton = <button className='c-form-button' onClick={this.toggleState}>Comment {length}</button>
    } else {
      showButton = <button className='c-form-button' onClick={this.toggleState}>Comment</button>
    }

    var showForm = this.state.form ? < CommentForm collapse={this.collapseForm} answer={this.props.answer}/>
    : "";



    return(
      <div className="single-answer group">
          <img className="answer-pic" src={this.props.answer.user.image_url} />
          <div className="answer-writer">{this.props.answer.user.username}</div>
          <div className="answer-description">{this.props.answer.user.description}</div><br/>
            {image}
          <div className="answer-body">{this.props.answer.title}</div>
          {showButton}<br/>
          <div className="first-form">{showForm}</div>
          {showIndex}
      </div>
    );
  }
});

module.exports = AnswersIndexItem;
