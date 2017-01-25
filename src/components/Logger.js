import React, { PureComponent } from 'react';
import Log from 'react-log';

class Logger extends PureComponent {
  render () {
    const example = require(`./examples/${this.props.component}`).default;

    return (
      <Log>
        { example }
      </Log>
    );
  }
};

Logger.propTypes = {
  component: React.PropTypes.string
};

Logger.defaultProps = {
  component: 'ReactLogLogo'
};

export default Logger;
