import React from 'react';
import ReactDOM from 'react-dom';
import ConsoleNav from './components/ConsoleNav';
import Hero from './components/Hero';
import Log from 'react-log';
import './layout/Layout.scss';

class App extends React.Component {
  render () {
    return (
      <main>
        <ConsoleNav />
        <Hero />
        <section>
          <p>Open your Console and see it in action!</p>
          <b>Under construction. More to come in the future</b>
        </section>

        <Log>
          <h1
            fontFamily='Open Sans, sans-serif'
            fontWeight='normal'
            fontSize='50px'>
            React
            <span
              fontFamily='Arial, Helvetica, sans-serif'
              background='#ffd10b'
              fontSize='45px'
              fontWeight='bold'
              borderRadius='5px'
              marginLeft='10px'
              padding='5px'
              borderBottom='2px solid black'>
              log
            </span>
          </h1>
        </Log>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
