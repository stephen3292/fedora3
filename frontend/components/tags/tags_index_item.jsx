var React = require('react');
var History = require('react-router').History;
var TagsIndexItem = React.createClass({

  mixins: [History],


  render: function() {
  // var tags = {this.props.tag.name}

    var tags = this.props.tag.name;
    return(
      <div className="single-tag">
        {tags}
      </div>
    );
  }
});

module.exports = TagsIndexItem;
