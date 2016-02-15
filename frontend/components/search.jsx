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

      if (searchResult._type === "Question") {
        return <QuestionIndexItem key={searchResult.id} question={searchResult} />;
      } else {
        return <AnswerIndexItem key={searchResult.id} answer={searchResult} />;
      }
    });

    return(
      <div className="search-land">
        <div className="big-search">
      <h1 className="ask-search">
        <div className="S">F</div>
        <div className="e">e</div>
        <div className="a">d</div>
        <div className="r">o</div>
        <div className="c">r</div>
        <div className="h">a</div>
        <div className="x">!</div>
      </h1>
      </div>
      <input className="search-input"placeholder="Search First!"
      onKeyUp={this.search} />
    <div className="results-show">Displaying {SearchResultsStore.all().length}
      {SearchResultsStore.meta().totalCount}</div>
    <button className="searchButton" onClick={this.nextPage}>Next ></button>

      <ul className="users-index">{ searchResults }</ul>
      </div>
    );
  }

});

module.exports = Search;
