'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseElement2 = require('./BaseElement');

var _BaseElement3 = _interopRequireDefault(_BaseElement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_BaseElement) {
  _inherits(Text, _BaseElement);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Text).apply(this, arguments));
  }

  _createClass(Text, [{
    key: 'getOffset',
    value: function getOffset(property) {
      var node = this.node;


      if (property) {
        var marginRegex = /\d+/g;
        var marginMatch = property.match(marginRegex).map(function (m) {
          return parseInt(m);
        });

        switch (marginMatch.length) {
          case 2:
            return { top: marginMatch[0], bottom: marginMatch[0], left: marginMatch[1], right: marginMatch[1] };
          case 4:
            return { top: marginMatch[0], bottom: marginMatch[2], left: marginMatch[3], right: marginMatch[1] };
          default:
            return { top: marginMatch[0], bottom: marginMatch[0], left: marginMatch[0], right: marginMatch[0] };
        }
      }

      return { top: 0, bottom: 0, left: 0, right: 0 };
    }
  }, {
    key: 'getFontSize',
    value: function getFontSize() {
      var node = this.node;


      if (node.style.fontSize) {
        var regex = /^(\d+(?:\.\d+)?)(.*)$/;
        var fontSizeMatch = node.style.fontSize.match(regex);

        return parseInt(fontSizeMatch[1]);
      }

      return 0;
    }
  }, {
    key: 'render',
    value: function render() {
      var node = this.node;


      var margin = this.getOffset(node.style.margin);
      var padding = this.getOffset(node.style.padding);
      var lineHeight = margin.top + margin.bottom + padding.top + padding.bottom + this.getFontSize();

      return {
        markup: '%c' + node.markup,
        style: _extends({}, node.style, { lineHeight: lineHeight + 'px' })
      };
    }
  }]);

  return Text;
}(_BaseElement3.default);

exports.default = Text;