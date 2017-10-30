import React from 'react';
import PropTypes from 'prop-types';
const hljs = window.hljs;

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
    const { language, literal, className } = this.props;

    return (
      <pre className={className}>
        <code ref='code' className={language}>
          {literal}
        </code>
      </pre>
    );
  }
}

CodeBlock.propTypes = {
  literal: PropTypes.string,
  language: PropTypes.string,
  className: PropTypes.string
};

export default React.createFactory(CodeBlock);
