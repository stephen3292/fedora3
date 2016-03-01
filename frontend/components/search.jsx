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
    debugger
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
        debugger
      } else {
        return <AnswerIndexItem key={searchResult.id} answer={searchResult} />;
      }
    });

    var results;

    return(
      <div className="search-box">
      <div className="big-search group">
      <div className="ask-search group">
          <ul className="search!">
          <li className="S">F</li>
          <li className="e">e</li>
          <li className="a">d</li>
          <li className="r">o</li>
          <li className="c">r</li>
          <li className="h">a</li>
          <li className="x">!</li>
        </ul>
      </div>
      <div className="search-input-box">
      <input className="search-input"placeholder="Search!"
      onKeyUp={this.search} /></div>
    <div className="results-show">Displaying {SearchResultsStore.all().length} Results
    </div>
    <button className="searchButton" onClick={this.nextPage}>Next ></button>

      <ul className="users-index">{ searchResults }</ul>
      </div>
      </div>
    );
  }

});

module.exports = Search;
