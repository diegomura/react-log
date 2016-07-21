"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = body;
function body(parser, node) {
  var children = [];

  if (node.props) {
    children = node.props.children;
    children = Array.isArray(children) ? children : [children];
  }

  return children.map(function (item) {
    return parser(item, {});
  });
}