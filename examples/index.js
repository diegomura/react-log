import React from 'react';
import ReactDOM from 'react-dom';
import Log from 'react-log';

ReactDOM.render(
  <Log>
    <h1 color="white" background="tomato" borderRadius="3px" padding="50px 10px" margin="20px">react-log</h1>
    <p font-size="110%">Cool things can be done in the console. Did you know that?</p>
    <h3 display="inline">For more info: </h3>
    <a href="https://github.com/diegomura/react-log">Github repo</a>
  </Log>,
  document.getElementById('root')
)
