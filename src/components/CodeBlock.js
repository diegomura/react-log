'use strict';

import React from 'react';
const hljs = window.hljs;
const h = React.createElement;

class CodeBlock extends React.PureComponent {

  componentDidMount () {
    this.highlightCode();
  }

  componentDidUpdate () {
    this.highlightCode();
  }

  highlightCode () {
    hljs.highlightBlock(this.refs.code);
  }

  render () {
    return (
      h('pre', null,
        h('code', {
          ref: 'code',
          className: this.props.language
        }, this.props.literal)
      )
    );
  }
}

CodeBlock.propTypes = {
  literal: React.PropTypes.string,
  language: React.PropTypes.string
};

export default React.createFactory(CodeBlock);
