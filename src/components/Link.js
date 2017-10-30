import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import './Link.scss';

class Link extends React.PureComponent {
  constructor (props) {
    super(props);

    this.state = { clicked: false };
  }

  onClick = () => {
    this.context.runExample(this.props.href);

    this.setState({ clicked: true });

    setTimeout(() => {
      this.setState({ clicked: false });
    }, 2000);
  }

  render () {
    return (
      <span
        onClick={this.onClick}
        className={this.props.className}
      >
        { this.state.clicked ? 'Check your console!' : 'Run' }
      </span>
    );
  }
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string
};

Link.contextTypes = {
  runExample: PropTypes.func
};

export default styled(React.createFactory(Link))`
  float: right;
  padding: 8px 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  background: #ababab;
  margin-top: -43px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
