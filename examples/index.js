import React from 'react';
import ReactDOM from 'react-dom';
import Log from 'react-log';

const h1Styles = {
  fontFamily:"Open Sans, sans-serif",
  color:"white",
  padding:"10px 20px",
  margin:"50px 30px 0px 0px",
  borderRadius:"8px",
  fontSize:"35px",
  background:"-webkit-linear-gradient(-55deg, #a2d49f 30%, #a2d49f 40%, #c7c12f 40%, #c7c12f 50%, #f26247 50%, #f26247 60%, #ec2045 60%, #ec2045 70%);"
}

const h2Styles = {
  margin:"0px 0px 20px 20px",
  padding:"15px",
  border:"1px solid #CCC",
  borderRadius:"5px"
}

const linkStyles = {
  margin:"25px 0px",
  fontSize:"15px"
}

ReactDOM.render(
  <Log>
    <h1 {...h1Styles}>react-log</h1>
    <h2 {...h2Styles}>Cool things can be done in the console. Did you know that?</h2>
    <a href="https://github.com/diegomura/react-log" {...linkStyles}>Github repo</a>
  </Log>,
  document.getElementById('root')
)
