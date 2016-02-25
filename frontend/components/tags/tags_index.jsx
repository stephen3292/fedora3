
var React = require('react');
// var TagForm = require('./tag_form');
var TagsIndexItem = require('./tags_index_item');
var CurrentUserStore = require('../../stores/current_user_store');
 AnswerApiUtil = require('./../../util/answers_api_util');




var TagsIndex = React.createClass({


  render: function() {

    var tags = this.props.question.question_tags.map(function (tag) {
      return <TagsIndexItem className="one-tag" tag={tag} key={tag.id}/>;
    });


    return(
      <div className="tagz">
        <ul className="tag-list group">
          <li>{tags}</li>
        </ul>
      </div>
    );

  }

});

module.exports = TagsIndex;
