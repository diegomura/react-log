import React from 'react';
import ReactDOM from 'react-dom';
import CodeBlock from './components/CodeBlock';
import ConsoleNav from './components/ConsoleNav';
import Hero from './components/Hero';
import Log from 'react-log';
import Markdown from 'react-markdown';
import Readme from '../README.md';
import './layout/Layout.scss';

const App = () => (
  <main>
    <ConsoleNav />
    <Hero />
    <section>
      <Markdown
        source={Readme}
        renderers={Object.assign({}, Markdown.renderers, { CodeBlock })} />
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

ReactDOM.render(<App />, document.getElementById('app'));
