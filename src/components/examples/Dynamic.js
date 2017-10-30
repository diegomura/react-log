import React from 'react';
import moment from 'moment';
import Log from 'react-log';

class DynamicLogger extends React.Component {
  constructor (props) {
    super(props);

    this.state = { date: this.getCurrentDate() };
  }

  componentDidMount () {
    setInterval(this.updateCurrentDate.bind(this), 1000);
  }

  updateCurrentDate () {
    this.setState({date: this.getCurrentDate()});
  }

  getCurrentDate () {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
  }

  render () {
    const { date } = this.state;

    return (
      <Log>
        <p>{date}</p>
      </Log>
    );
  }
}

export default DynamicLogger;
