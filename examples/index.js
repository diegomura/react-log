import React from 'react';
import ReactDOM from 'react-dom';
import Log from 'react-log';
import styles from './styles';

class LogExample extends React.Component {
  render () {
    return (
      <Log>
        <div {...styles.react}>
          React
          <span {...styles.log}>log</span>
        </div>
        <a href='https://github.com/diegomura/react-log' display='block' lineHeight='40px'>
          For more info
        </a>
      </Log>
    );
  }
}

ReactDOM.render(
  <LogExample />,
  document.getElementById('root')
);
