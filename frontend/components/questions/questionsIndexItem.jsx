var React = require('react');
var TagsIndex = require('../tags/tags_index');
var History = require('react-router').History;
var QuestionDetail = require('./questionDetail');
var AnswersIndex = require('../answers/answers_index');

var QuestionIndexItem = React.createClass({

  mixins: [History],


  render: function() {

    var qId = this.props.question.id;
    var questionDetail = "#/questions/" + qId;
    var title = this.props.question.title;
    var i = "";
    var show = "nope";
    if (this.props.question.image_url.indexOf("missing") > -1){
      i = "";
      show = "nope";
    } else {
      i = this.props.question.image_url;
      show = "post-image";
    }


    return(
      <ul className="single-question group">
          <div className="answer-written-in">Question Asked In:< TagsIndex question={this.props.question} /> </div>

        <li className="question-title">
            <a className="question-title-link" href={questionDetail}>{title}</a>
        </li>

        <br/>

        <img className={show} src={i} />
        < AnswersIndex question={this.props.question} />
    </ul>
    );
  }
});

module.exports = QuestionIndexItem;
