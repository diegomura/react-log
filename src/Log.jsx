import React, { PropTypes } from 'react'

class Log extends React.Component {
  componentDidMount() {
    const { children } = this.props;
    const { type, props } = children;

    const body = React.createElement('body', null, children)
  }

  render() {
    return false;
  }
}

export default Log;
