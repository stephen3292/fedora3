var React = require('react');
var SearchResultsStore = require('../stores/search_results_store');
var QuestionIndexItem = require('../components/questions/questionsIndexItem');
var SearchApiUtil = require('../util/search_api_util');
var AnswerIndexItem = require('../components/answers/answers_index_item');

var Search = React.createClass({
  componentDidMount: function() {
  this.listener = SearchResultsStore.addListener(this._onChange);
  },

  getInitialState: function() {
    return {page: 1, query: ""};
  },

  _onChange: function(){
    this.forceUpdate();
  },

  search: function(e) {
    var query = e.target.value;
    debugger
    SearchApiUtil.search(query, 1);

    this.setState({page: 1, query: query});
  },

  nextPage: function(){
    var nextPage = this.state.page + 1;
    SearchApiUtil.search(this.state.query, nextPage);

    this.setState({page: nextPage});
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },

  render: function(){

    var searchResults = SearchResultsStore.all().map(function(searchResult) {
      debugger
      if (searchResult._type === "Question") {
        return <QuestionIndexItem question={searchResult} />;
      } else {
        return <AnswerIndexItem answer={searchResult} />;
      }
    });

    return(
      <div>you are here
      <h1 className="ask-search">Search!</h1>
      <input placeholder="Search before asking!"
      onKeyUp={this.search} />
      Displaying {SearchResultsStore.all().length} of
      {SearchResultsStore.meta().totalCount}
      <button onClick={this.nextPage}>Next ></button>

      <ul className="users-index">{ searchResults }</ul>
      </div>
    );
  }

});

module.exports = Search;
