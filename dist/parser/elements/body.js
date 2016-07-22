"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = body;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Body = function () {
  function Body(node, parser) {
    _classCallCheck(this, Body);

    this.node = node;
    this.parser = parser;
  }

  _createClass(Body, [{
    key: "render",
    value: function render() {
      var node = this.node;
      var parser = this.parser;


      var children = [];

      if (node.props) {
        children = node.props.children;
        children = Array.isArray(children) ? children : [children];
      }

      return children.map(function (item) {
        return parser(item, {});
      });
    }
  }]);

  return Body;
}();

exports.default = Body;
function body(node, parser) {}