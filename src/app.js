import React from 'react';
import ReactDOM from 'react-dom';
import ConsoleNav from './components/ConsoleNav';
import Hero from './components/Hero';
import './layout/Layout.scss';

class App extends React.Component {
  render () {
    return (
      <main>
        <ConsoleNav />
        <Hero />
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
