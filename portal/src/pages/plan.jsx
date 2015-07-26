/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var DefaultLayout = React.createFactory(require('../layouts/Default'));

var PlanPage = React.createClass({
  displayName: 'plan.jsx',

  getDefaultProps: function() {
    return {
      layout: DefaultLayout
    };
  },

  render: function() {
    return (
      <div>
        <div className="page-header">
          <h1>Plan</h1>
          <p className="lead">
            The more you plan, the better you success!
          </p>
        </div>
      </div>
    );
  }
});

module.exports = PlanPage;
