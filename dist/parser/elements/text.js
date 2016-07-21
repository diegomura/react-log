'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = text;
function text(parser, node) {
  return {
    markup: '%c' + node.markup,
    style: node.style
  };
}