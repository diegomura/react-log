import React from 'react';
import PropTypes from 'prop-types';

const Logger = ({ component }) => {
  const Example = require(`./examples/${component}`).default;

  return (
    <Example />
  );
};

Logger.propTypes = {
  component: PropTypes.string
};

Logger.defaultProps = {
  component: 'ReactLogLogo'
};

export default Logger;
