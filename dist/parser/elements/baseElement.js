'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseElement = function () {
  function BaseElement(node, parser) {
    _classCallCheck(this, BaseElement);

    this.node = node;
    this.parser = parser;
  }

  _createClass(BaseElement, [{
    key: 'getDefaultStyles',
    value: function getDefaultStyles() {
      return {};
    }
  }, {
    key: 'render',
    value: function render() {
      var node = this.node;
      var parser = this.parser;


      var children = [];

      if (node.props) {
        children = node.props.children;
        children = Array.isArray(children) ? children : [children];
      }

      var parsedElement = parser(children[0], _extends({}, this.getDefaultStyles(), node.props));

      if (parsedElement.style.display && parsedElement.style.display == 'block') {
        parsedElement.markup += '\n';
      }

      return parsedElement;
    }
  }]);

  return BaseElement;
}();

exports.default = BaseElement;