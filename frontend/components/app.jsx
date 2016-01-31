var React = require('react'),
    Header = require("./header"),
    SessionsApiUtil = require('./../util/sessions_api_util'),
    CurrentUserStore = require("./../stores/current_user_store");




    var App = React.createClass({

      componentDidMount: function () {
        CurrentUserStore.addListener(this.forceUpdate.bind(this));
        SessionsApiUtil.fetchCurrentUser();
      },

      render: function() {
        if (!CurrentUserStore.userHasBeenFetched()) {
          return <p>Fetching User</p>;
        }


        return (
          <div className="div-w/header">
            <Header className="site-header"/>
            { this.props.children }
          </div>
        );
      },

    });

    module.exports = App;
