import React from 'react';
import ReactDOM from 'react-dom';
import Log from 'react-log';

ReactDOM.render(
  <Log>
    <h1 color="red">h1 title</h1>
    <h2 color="blue">h2 title</h2>
    <h3 color="green">h3 title</h3>
    <h4 color="yellow">h4 title</h4>
    <h5 color="orange">h5 title</h5>
    <h6 color="purple">h6 title</h6>
    <p>We also support paragraphs</p>
    <div>And divs</div>
    <span>And</span><span> span</span>
  </Log>,
  document.getElementById('root')
)
