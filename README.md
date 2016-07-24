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

const h1Styles = {
  fontFamily:"Open Sans, sans-serif",
  color:"white",
  padding:"10px 20px",
  borderRadius:"8px",
  background:"-webkit-linear-gradient(...)
	//...
}

const h2Styles = {
  margin:"0px 0px 20px 20px",
  padding:"15px",
  border:"1px solid #CCC",
	//...
}

const linkStyles = {
	//...
}

//...
<Log>
	<h1 {...h1Styles}>react-log</h1>
	<h2 {...h2Styles}>Cool things can be done in the console. Did you know that?</h2>
	<a href="https://github.com/diegomura/react-log" {...linkStyles}>Github repo</a>
</Log>
```
[See full example](https://github.com/diegomura/react-log/blob/master/examples/index.js)

#### Output
![banner](https://cloud.githubusercontent.com/assets/5600341/17076797/edb1eb32-5091-11e6-8c84-579ac50c913c.png)

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
