## Install
```sh
yarn add react-log
```
or
```sh
npm install react-log --save
```

## Usage
_React-log_ exports a single React Component called _Log_. Each child will not be rendered on the DOM, but it will produce a analog representation on the console.

No proprietary syntax is needed for child HTML elements. _React-log_ handles the parsing and rendering of native React elements for you.

**Open your DevTools and watch how the _React-log_ logo gets rendered on the Console!**

```js
const LogoLogger = () => (
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
);

ReactDOM.render(<LogoLogger />, element);
```
_Pretty neat, eh?_

## Components
### Headings
```jsx
<Log>
  <h1>Lorem ipsum</h1>
  <h2>Lorem ipsum</h2>
  <h3>Lorem ipsum</h3>
  <h4>Lorem ipsum</h4>
  <h5>Lorem ipsum</h5>
  <h6>Lorem ipsum</h6>
</Log>
```
### Lists
```jsx
<Log>
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>

  <ol>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ol>
</Log>
```
### Paragraph
```jsx
<Log>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</Log>
```
### Links
```jsx
<Log>
  <a href="https://twitter.com/diegomura">Twitter</a>
  <a href="https://github.com/diegomura">Github</a>
</Log>
```
### Layout
```jsx
<Log>
  <div>
    OuterDiv
    <div>InnerDiv1</div>
    <div>InnerDiv2</div>
  </div>
</Log>
```

## Styling
_Not written yet!_

## Other examples

### Stateful Components
It is also possible to render stateful components into the Console.
Each time the component updates, the console is cleared and everything gets rendered again.

```js
import moment from 'moment';

class DynamicLogger extends React.Component {
  constructor (props) {
    super(props);

    this.state = { date: this.getCurrentDate() };
  }

  componentDidMount() {
    setInterval(this.updateCurrentDate.bind(this), 1000);
  }

  updateCurrentDate() {
    this.setState({date: this.getCurrentDate()});
  }

  getCurrentDate() {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
  }

  render() {
    const { date } = this.state;

    return (
      <Log>
        <p>{date}</p>
      </Log>
    );
  }
}
```

### Binding DOM with Console
_Not written yet!_
