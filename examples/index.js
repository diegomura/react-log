import React from 'react';
import ReactDOM from 'react-dom';
import Log from 'react-log';
import moment from 'moment';
import styles from './styles';

class LogExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: this.getCurrentDate()}
  }

  componentDidMount() {
    setInterval(this.updateCurrentDate.bind(this), 1000)
  }

  updateCurrentDate() {
    this.setState({date: this.getCurrentDate()});
  }

  getCurrentDate() {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
  }

  render() {
    let { date } = this.state;

    return (
      <Log>
        <h1 {...styles.h1Styles}>react-log</h1>
        <h2 {...styles.h2Styles}>Cool things can be done in the console. Did you know that?</h2>
        <h3 {...styles.h3Styles}>With react-log, state changes will be reflected on the console:</h3>
        <p {...styles.dateStyles}>{date}</p>
        <a href="https://github.com/diegomura/react-log" {...styles.linkStyles}>For more info</a>
      </Log>
    );
  }
}

ReactDOM.render(
  <LogExample/>,
  document.getElementById('root')
)
