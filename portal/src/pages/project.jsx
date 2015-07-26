/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var DefaultLayout = React.createFactory(require('../layouts/Default'));

var ProjectPage = React.createClass({
  displayName: 'project.jsx',

  getDefaultProps: function() {
    return {
      layout: DefaultLayout
    };
  },

  render: function() {
    return (
      <div>
        <div className="page-header">
          <h1>Projects</h1>
          <p className="lead">
            ---
          </p>
        </div>
      </div>
    );
  }
});

module.exports = ProjectPage;
