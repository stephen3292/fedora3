
var React = require('react');
// var TagForm = require('./tag_form');
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
          <li>{tags}</li>
        </div>
      </div>
    );

  }

});

module.exports = TagsIndex;
