import React, { PropTypes } from 'react'
import parser from './parser'
import { serializeStyleObject } from './utils/styleObjectSerializer'

class Log extends React.Component {
  componentDidMount() {
    const { children } = this.props;
    const { type, props } = children;

    const body = React.createElement('body', null, children);
    const parsedData = parser(body);
    const logMarkup = parsedData.map((item) => item.markup).join('');
    const logStyles = parsedData.map((item) => serializeStyleObject(item.style));

    console.log(logMarkup, ...logStyles);
  }

  render() {
    return false;
  }
}

export default Log;
