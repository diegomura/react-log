<big><h1 align="center">react-log</h1></big>

<p align="center">
	<a href="https://travis-ci.org/diegomura/react-log">
		<img src="https://api.travis-ci.org/diegomura/react-log.svg?branch=master">
	</a>

	<a href="https://www.npmjs.com/package/react-log">
		<img src="https://img.shields.io/npm/v/react-log.svg">
	</a>

	<a href="https://www.npmjs.com/package/react-log">
		<img src="https://img.shields.io/npm/dm/react-log.svg">
	</a>

	<a href="https://www.npmjs.com/package/react-log">
		<img src="https://img.shields.io/npm/l/react-log.svg">
	</a>
</p>

> React for the Console

## Install
```sh
npm install react-log --save
```

## Usage
_react-log_ exports a single React Component called _Log_. Each child will not be rendered on the DOM, but it will produce a analog representation on the console.

No proprietary syntax is needed for child HTML elements. _react-log_ handles the parsing and rendering of native React-DOM elements for you.

Let's see it in action!

### Example

```js
import Log from 'react-log';

//...
<Log>
  <h2 color="white" background="tomato" borderRadius="3px" padding="1px 20px">react-log</h2>
  <p fontSize="110%">Cool things can be done in the console. Did you know that?</p>
  <h3 display="inline">For more info: </h3>
  <a href="https://github.com/diegomura/react-log">Github repo</a>
</Log>
```

#### Output
![banner](https://cloud.githubusercontent.com/assets/5600341/16939152/2b9db54c-4d55-11e6-89e6-c7a19a9f77e2.png)

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

## Roadmap
* [ ] Demo page
* [ ] Img element support
* [ ] Nested elements support
* [ ] Add more examples
* [ ] Docs of avaliable elements and props

## License

MIT © [Diego Muracciole](http://github.com/diegomura)
