'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transformer = require('./transformer');

var _transformer2 = _interopRequireDefault(_transformer);

var _generator = require('./generator');

var _generator2 = _interopRequireDefault(_generator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (ast) {
  var newAst = (0, _transformer2.default)(ast);
  var output = (0, _generator2.default)(newAst);

  return output;
};