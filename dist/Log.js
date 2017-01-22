'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _compiler = require('./compiler');

var _compiler2 = _interopRequireDefault(_compiler);

var _styleObjectSerializer = require('./utils/styleObjectSerializer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Log = function (_React$Component) {
  _inherits(Log, _React$Component);

  function Log() {
    _classCallCheck(this, Log);

    return _possibleConstructorReturn(this, (Log.__proto__ || Object.getPrototypeOf(Log)).apply(this, arguments));
  }

  _createClass(Log, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.log();
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      if (console.clear) {
        console.clear();
      } else {
        clear();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.log();
    }
  }, {
    key: 'log',
    value: function log() {
      var _console;

      var children = this.props.children;


      var body = _react2.default.createElement('body', null, children);
      var compiledData = (0, _compiler2.default)(body);
      var styles = compiledData.styles.map(function (item) {
        return (0, _styleObjectSerializer.serializeStyleObject)(item);
      });

      (_console = console).log.apply(_console, [compiledData.value].concat(_toConsumableArray(styles)));
    }
  }, {
    key: 'render',
    value: function render() {
      return false;
    }
  }]);

  return Log;
}(_react2.default.Component);

exports.default = Log;