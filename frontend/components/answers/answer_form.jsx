var React = require('react');
var AnswersApiUtil = require('./../../util/answers_api_util.js');
var CurrentUserStore = require('./../../stores/current_user_store.js');


var AnswerForm = React.createClass({
  getInitialState: function(){
    return {title: "", imageFile: null, imageUrl: "", currentUser: this.getStateFromStore()};
  },

  getStateFromStore: function () {

    return ( CurrentUserStore.currentUser());
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
    this.props.collapse();
  },

  resetForm: function() {
    this.setState({title: "", imageFile: null, imageUrl: ""});
  },
  render: function() {
    var cool;
    if (this.state.imageUrl) {
      cool = <img className="little-preview-image" src={this.state.imageUrl}/>
    }
    return(

      <div className="answer-form">
        <h2 className= "answer-header"></h2>
          <img className="answer-pic" src={this.state.currentUser.image_url} />
          <div className="answer-writer">{this.state.currentUser.username}</div>
          <div className="answer-description">{this.state.currentUser.description}</div><br/>
          <input className="a-form-title" typeplaceholder="Answer" onInput={this.updateTitle} value={this.state.title}></input>
          <input className="little-image-attachment" type="file" onChange={this.changeFile} />
          {cool}
          <button className="a-form-submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
});
module.exports = AnswerForm;
