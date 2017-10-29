import React from 'react';
import ReactDOM from 'react-dom';
import Log from 'react-log';
import styles from './styles';

const LogExample = () => (
  <Log>
    <h1 style={styles.react}>
      React
      <span style={styles.log}>
        log
      </span>
    </h1>
    <a
      href='https://github.com/diegomura/react-log'
      style={styles.link}
    >
      For more info
    </a>
  </Log>
);

ReactDOM.render(
  <div>
    <h1>Open your console!</h1>
    <LogExample />
  </div>,
  document.getElementById('root')
);
