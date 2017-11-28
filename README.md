<p align="center"><img src="https://user-images.githubusercontent.com/5600341/32155369-b420c40a-bd15-11e7-940d-580db5421252.png" width="400px"></p>

React for the Console

[![npm](https://img.shields.io/npm/v/react-log.svg)](https://www.npmjs.com/package/react-log)
[![Travis](https://img.shields.io/travis/diegomura/react-log.svg)](https://travis-ci.org/diegomura/react-log)
[![license](https://img.shields.io/github/license/diegomura/react-log.svg)](https://github.com/diegomura/react-log/blob/master/LICENSE)

## Install
```sh
yarn add react-log
```
or
```sh
npm install react-log --save
```

## Usage
_react-log_ exports a single React Component called _Log_. Each child will not be rendered on the DOM, but will produce an analog representation on the console.

No proprietary syntax is needed for child HTML elements. _react-log_ handles the parsing and rendering of native React-DOM elements for you.

Let's see it in action!

### Example

```jsx
import Log from 'react-log';

<Log>
  <h1
    style={{
      color: 'black',
      fontSize: '50px',
      fontWeight: 'normal',
      fontFamily: 'Open Sans, sans-serif',
    }}>
    React
    <span
      style={{
        color: 'white',
        fontSize: '45px',
        fontWeight: 'bold',
        marginLeft: '10px',
        padding: '5px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        background: 'linear-gradient(to bottom right, #13493b, #016a26)',
      }}>
      log
    </span>
  </h1>
  <a
    href='https://github.com/diegomura/react-log'
    style={{ display: 'block', lineHeight: '40px' }}
  >
    For more info
  </a>
</Log>
```
[See full example](https://github.com/diegomura/react-log/blob/master/examples/index.js)

#### Output
![banner](https://user-images.githubusercontent.com/5600341/32155421-008b99dc-bd16-11e7-8ac4-13f094577b7e.png)

#### Run the example yourself
On the root of the project:

```sh
cd examples/
npm install
npm start
```

The server should be listening now on `http://localhost:8080`

## Browser Support
Tested and working on Chrome 51 and Firefox 45.
Does not work on Safari or IE as far I've seen. Yet.

## License

MIT © [Diego Muracciole](http://github.com/diegomura)
