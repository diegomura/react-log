'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parser;

var _elements = require('./elements');

var _elements2 = _interopRequireDefault(_elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parser(node, style) {
  if (typeof node == 'string') {
    node = { type: 'text', markup: node, style: style };
  }

  if (!_elements2.default[node.type]) {
    throw new TypeError(node.type);
  }

  var element = new _elements2.default[node.type](node, parser);

  return element.render();
}