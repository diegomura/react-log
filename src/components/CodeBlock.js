'use strict';

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
const hljs = window.hljs;
const h = React.createElement;

const CodeBlock = React.createClass({
  displayName: 'CodeBlock',
  mixins: [PureRenderMixin],
  propTypes: {
    literal: React.PropTypes.string,
    language: React.PropTypes.string
  },

  componentDidMount: function() {
    this.highlightCode();
  },

  componentDidUpdate: function() {
    this.highlightCode();
  },

  highlightCode: function() {
    hljs.highlightBlock(this.refs.code);
  },

  render: function() {
    return (
      h('pre', null,
        h('code', {
          ref: 'code',
          className: this.props.language
        }, this.props.literal)
      )
    );
  }
});

export default React.createFactory(CodeBlock);
