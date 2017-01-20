import React from 'react';
import ReactDOM from 'react-dom';
import Log from 'react-log';
import styles from './styles';

class LogExample extends React.Component {
  render() {
    return (
      <Log>
        <div {...styles.lightText}>Meetup</div>
        <div>
          <span {...styles.boldText}>React</span>
          <span {...styles.tag}>JS</span>
        </div>
        <div {...styles.boldText}>Uruguay</div>
      </Log>
    );
  }
}

ReactDOM.render(
  <LogExample />,
  document.getElementById('root')
);
