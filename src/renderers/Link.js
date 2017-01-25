'use strict';

import React from 'react';
import './Link.scss';

class Link extends React.PureComponent {
  constructor (props) {
    super(props);

    this.onClick = ::this.onClick;
  }

  onClick () {
    this.context.runExample(this.props.href);
  }

  render () {
    return (
      <span className='run-example' onClick={this.onClick}>
        Run the example
      </span>
    );
  }
}

Link.propTypes = {
  href: React.PropTypes.string.isRequired
};

Link.contextTypes = {
  runExample: React.PropTypes.func
};

export default React.createFactory(Link);
