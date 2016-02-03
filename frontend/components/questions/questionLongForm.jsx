var React = require('react'),
    questionsStore = require('./../../stores/questions_store');
    TagsApiUtil = require('./../../util/tags_api_util');


var QuestionForm = React.createClass({
  getInitialState: function(){
    return { title: "", body: "", tag: "", imageFile: null, imageUrl: ""};
  },

  updateTitle: function(e){
    this.setState({title: e.currentTarget.value});
  },

  updateBody: function(e){
    this.setState({body: e.currentTarget.value});
  },

  updateTag: function(e){
    this.setState({tag: e.currentTarget.value});
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

  handleSubmit: function(e) {
    e.preventDefault();
    var formData = new FormData();
    var tagData = new FormData();

    formData.append("question[title]", this.state.title);
    if (this.state.imageFile) {
      formData.append("question[image]", this.state.imageFile);
    } else {
      formData.append("question[image]", "");
    }
    formData.append("question[body]", this.state.body);
    tagData.append("question_tag[name]", this.state.tag);
    ApiUtil.createQuestion(formData, function(question) {
      TagsApiUtil.createTag({name: this.state.tag, questionId: question.id});
    }.bind(this));
  },

  resetForm: function() {
    this.setState({title: "", body: "", imageFile: null, imageUrl: ""});
  },

  render: function(){
    return(
      <div className="ask-a-question group">
          <h2 className='ask-header'></h2>
          <input className="long-form-title" placeholder="Ask a Question" onInput={this.updateTitle} value={this.state.title}></input>
          <input className="long-form-tag" placeholder="Topic" onInput={this.updateTag} value={this.state.tag}></input>
          <button className="long-form-button" onClick={this.handleSubmit}>Ask Question</button>
          <input className="long-image-attachment" type="file" onChange={this.changeFile} />
          <img className="long-preview-image" src={this.state.imageUrl}/>
          <input className="long-form-body" onInput={this.updateBody} value={this.state.body}></input>

      </div>
    );
  }
});

module.exports = QuestionForm;
