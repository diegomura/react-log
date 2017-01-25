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
        <h1 {...styles.heading}>Headings:</h1>
        <h1>Lorem ipsum</h1>
        <h2>Lorem ipsum</h2>
        <h3>Lorem ipsum</h3>
        <h4>Lorem ipsum</h4>
        <h5>Lorem ipsum</h5>
        <h6>Lorem ipsum</h6>
        <h1 {...styles.heading}>Lists:</h1>

        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
        <ol>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ol>
        <h1 {...styles.heading}>Links:</h1>
        <a href='https://github.com/diegomura/react-log' display='block'>React-log</a>
        <h1 {...styles.heading}>Paragraphs:</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <h1 {...styles.heading}>Nesting and styles inheritance:</h1>
        <div color="red" fontSize="20px">
          OuterDiv
          <div color='green' fontWeight="bold">
            InnerDiv
          </div>
        </div>
      </Log>
    );
  }
}

ReactDOM.render(
  <LogExample />,
  document.getElementById('root')
);
