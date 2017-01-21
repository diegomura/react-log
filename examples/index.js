import React from 'react';
import ReactDOM from 'react-dom';
import Log from 'react-log';
import styles from './styles';

class LogExample extends React.Component {
  render() {
    return (
      <Log>
        <div>Meetup</div>
        <div>
          <span>React</span>
          <span>JS</span>
        </div>
        <div>Uruguay</div>
        <a href='http://google.com'>Google</a>
      </Log>
    );
  }
}

ReactDOM.render(
  <LogExample />,
  document.getElementById('root')
);
