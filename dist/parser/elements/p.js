'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = p;
function p(parser, node) {
  var defaultStyles = {
    display: 'block',
    color: 'black',
    margin_left: '8px'
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