var React = require('react');
var History = require('react-router').History;
var TagsIndexItem = React.createClass({

  mixins: [History],


  render: function() {
  // var tags = {this.props.tag.name}
    var tagId = this.props.tag.id;
    var tagLink = '#/question_tags/' + tagId;
    var tags = this.props.tag.name;
    return(
      <div className="single-tag">
        <a className="tag-link" href={tagLink}>{tags}</a>
      </div>
    );
  }
});

module.exports = TagsIndexItem;


// render: function() {
// // var tags = {this.props.tag.name}
//
//   var tagName = this.props.tag.name;
//   var tagId = this.props.tag.id;
//   var tagLink = '#/question_tags/' + tagId;
//
//
//   return(
//     <div className="single-tag">
//       <li className="nav-link"><a className="tag-link" href={tagLink}>tagName</a></li>
//     </div>
//   );
// }
// });
//
// module.exports = TagsIndexItem;
