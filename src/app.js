import React from 'react';
import ReactDOM from 'react-dom';
import ForkRibbon from './components/ForkRibbon';
import Link from './renderers/Link';
import CodeBlock from './renderers/CodeBlock';
import ConsoleNav from './components/ConsoleNav';
import Hero from './components/Hero';
import Logger from './components/Logger';
import Markdown from 'react-markdown';
import Readme from '../README.md';
import './layout/Layout.scss';

class App extends React.PureComponent {
  constructor (props) {
    super(props);

    this.state = { loggedType: undefined };

    this.runExample = ::this.runExample;
  }

  getChildContext () {
    return {runExample: this.runExample};
  }

  runExample (type) {
    this.setState({ loggedType: type });
  }

  render () {
    const { loggedType } = this.state;

    return (
      <main>
        <ForkRibbon />
        <ConsoleNav />
        <Hero />
        <section>
          <Markdown
            source={Readme}
            renderers={Object.assign({}, Markdown.renderers, { CodeBlock, Link })} />
        </section>
        <Logger component={loggedType} />
      </main>
    );
  }
}

App.childContextTypes = {
  runExample: React.PropTypes.func
};

ReactDOM.render(<App />, document.getElementById('app'));
