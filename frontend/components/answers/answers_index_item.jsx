var React = require('react');
var History = require('react-router').History;
var AnswersIndexItem = React.createClass({

  mixins: [History],


  render: function() {
    var image;
    if (this.props.answer.image_url.indexOf("missing") === -1){
      image = <img className="post-image" src={this.props.answer.image_url} />;
    }



    return(
      <div className="single-answer group">
          <img className="answer-pic" src={this.props.answer.user.image_url} />
          <div className="answer-writer">{this.props.answer.user.username}</div>
          <div className="answer-description">{this.props.answer.user.description}</div><br/>
            {image}
          <div className="answer-body">{this.props.answer.title}</div>


      </div>
    );
  }
});

module.exports = AnswersIndexItem;
