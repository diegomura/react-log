'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = h1;
function h1(parser, node) {
  var defaultStyles = {
    display: 'block',
    color: 'black',
    font_weight: 'bold',
    font_size: '.67em'
  };

  var children = [];

  if (node.props) {
    children = node.props.children;
    children = Array.isArray(children) ? children : [children];
  }

  var parsedElement = parser(children[0], _extends({}, defaultStyles, node.props));

  if (parsedElement.style.display && parsedElement.style.display == 'block') {
    parsedElement.markup += '\n';
  }

  return parsedElement;
}