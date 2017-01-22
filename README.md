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
### Lists
### Paragraph
### Links
### Layout

## Styling

## Other examples
