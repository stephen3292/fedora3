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
    if (this.props.answer.comments.length >= 1){
      showButton = <button className='a-form-button' onClick={this.toggleState}>Show Comments ({length})</button>
    }

    var showForm = this.state.form ? < CommentForm collapse={this.collapseForm} answer={this.props.answer} parent/>
    : "";



    console.log(this.state.form)
    return(
      <div className="single-answer group">
          <img className="answer-pic" src={this.props.answer.user.image_url} />
          <div className="answer-writer">{this.props.answer.user.username}</div>
          <div className="answer-description">{this.props.answer.user.description}</div><br/>
            {image}
          <div className="answer-body">{this.props.answer.title}</div>
          {showButton}
          <button className='a-form-button' onClick={this.toggleForm}>Reply</button><br/>
          {showForm}
          {showIndex}

      </div>
    );
  }
});

module.exports = AnswersIndexItem;
