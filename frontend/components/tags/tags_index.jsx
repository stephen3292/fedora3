
var React = require('react');
var QuestionIndexItem = require('../questions/questionsIndexItem');
// var TagForm = require('./tag_form');
var TagsStore = require('./../../stores/tags_store');
var TagsIndexItem = require('./tags_index_item');
var CurrentUserStore = require('../../stores/current_user_store');
 AnswerApiUtil = require('./../../util/answers_api_util');




var TagsIndex = React.createClass({


  render: function() {

    var tags = this.props.question.question_tags.map(function (tag) {
      return <TagsIndexItem tag={tag} key={tag.id}/>;
    });


    return(
      <div>
        <div className="tag-list">
          {tags}
        </div>
      </div>
    );

  }

});

module.exports = TagsIndex;
