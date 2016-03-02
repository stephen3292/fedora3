var React = require('react'),
    questionsStore = require('./../../stores/questions_store');

var QuestionForm = React.createClass({
  getInitialState: function(){
    return { title: "", body: "", imageFile: null, imageUrl: ""};
  },

  updateTitle: function(e){
    this.setState({title: e.currentTarget.value});
  },

  updateBody: function(e){
    this.setState({body: e.currentTarget.value});
  },

  changeFile: function(e) {
  var reader = new FileReader();
  var file = e.currentTarget.files[0];

    reader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: reader.result});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file); // will trigger a load end event when it completes, and invoke reader.onloadend
    } else {
      this.setState({imageFile: null, imageUrl: ""});
    }
  },

  handleKeyPress: function(e){
    if (e.key === 'Enter'){
      this.handleSubmit(e);
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var formData = new FormData();


    formData.append("question[title]", this.state.title);
    if (this.state.imageFile) {
      formData.append("question[image]", this.state.imageFile);
    } else {
      formData.append("question[image]", "");
    }
    formData.append("question[body]", this.state.body);

    ApiUtil.createQuestion(formData);
    this.resetForm();
  },

  resetForm: function() {
    this.setState({title: "", imageFile: null, imageUrl: ""});
  },

  render: function(){
    return(
      <div className="ask-a-question group">
          <h2 className='ask-header'></h2>
          <input className="form-title" placeholder="Ask a Question" onKeyPress={this.handleKeyPress} onInput={this.updateTitle} value={this.state.title}></input>

          <button className="q-form-button" onClick={this.handleSubmit}>Ask Question</button>
          <input className="image-attachment" type="file" onChange={this.changeFile} />
          <div className="preview-image" src={this.state.imageUrl}/>
          <input className="form-body" onInput={this.updateBody} value={this.state.body}></input>

      </div>
    );
  }
});

module.exports = QuestionForm;
