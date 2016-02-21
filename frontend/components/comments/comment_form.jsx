var React = require('react');
var CommentForm = React.createClass({
  render: function(){
    return(
      <div className="comment-box">
        <input className="c-form-title" typeplaceholder="Answer" ></input>
      </div>
    )

  }
});


module.exports = CommentForm;
