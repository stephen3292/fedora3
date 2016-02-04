var React = require('react');
var AnswersApiUtil = require('./../../util/answers_api_util.js');


var AnswerForm = React.createClass({
  getInitialState: function(){
    return {title: "", imageFile: null, imageUrl: ""};
  },

  updateTitle: function(e){
    this.setState({title: e.currentTarget.value});
  },

  changeFile: function(e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];

    reader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: reader.result});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({imageFile: null, imageUrl: ""});
    }
  },

  handleSubmit: function(e) {

    e.preventDefault();
    var formData = new FormData();
    formData.append("answer[title]", this.state.title);
    if (this.state.imageFile) {
      formData.append("answer[image]", this.state.imageFile);
    } else {
      formData.append("answer[image]", "");
    }
    formData.append("answer[question_id]", this.props.question.id);
    AnswersApiUtil.createOneAnswer(formData);
  },

  resetForm: function() {
    this.setState({title: "", imageFile: null, imageUrl: ""});
  },

  render: function() {
    return(
      <div className="answer-form">
        <h2 className= "answer-header"></h2>
          <input className="a-form-title" placeholder="Answer" onInput={this.updateTitle} value={this.state.title}></input>
          <input className="image-attachment" type="file" onChange={this.changeFile} />
          <img className="preview-image" src={this.state.imageUrl}/>
          <button className="form-button" onClick={this.handleSubmit}>Write Answer</button>
      </div>
    );
  }
});

module.exports = AnswerForm;
