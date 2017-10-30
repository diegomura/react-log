import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import Ribbon from './Ribbon';
import Link from './Link';
import CodeBlock from './CodeBlock';
import Console from './Console';
import Hero from './Hero';
import Logger from './Logger';
import Footer from './Footer';
import readme from '../../README.md';

class App extends React.PureComponent {
  constructor (props) {
    super(props);

    this.state = { loggedType: undefined };
  }

  getChildContext () {
    return {runExample: this.runExample};
  }

  clearConsole = () => {
    if (window.clear) {
      window.clear();
    } else {
      console.clear();
    }
  }

  runExample = (type) => {
    this.clearConsole();
    this.setState({ loggedType: type });
  }

  render () {
    const { loggedType } = this.state;

    return (
      <main>
        <Ribbon />
        <Console />
        <Hero />
        <section>
          <Markdown
            source={readme}
            renderers={{ ...Markdown.renderers, CodeBlock, Link }}
          />
        </section>
        <Logger component={loggedType} />
        <Footer />
      </main>
    );
  }
}

App.childContextTypes = {
  runExample: PropTypes.func
};

export default App;
