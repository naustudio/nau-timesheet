/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var DefaultLayout = React.createFactory(require('../layouts/Default'));

var ReportPage = React.createClass({
  displayName: 'report.jsx',

  getDefaultProps: function() {
    return {
      layout: DefaultLayout
    };
  },

  render: function() {
    return (
      <div>
        <div className="page-header">
          <h1>Report</h1>
          <p className="lead">
            ---
          </p>
        </div>
      </div>
    );
  }
});

module.exports = ReportPage;
