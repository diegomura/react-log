'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serializeStyleObject = serializeStyleObject;

var _paramCase = require('param-case');

var _paramCase2 = _interopRequireDefault(_paramCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function serializeStyleObject(styleObject) {
  var serializedObject = '';

  for (var key in styleObject) {
    if (styleObject.hasOwnProperty(key)) {
      serializedObject += (0, _paramCase2.default)(key) + ':' + styleObject[key] + ';';
    }
  }

  return serializedObject.replace('_', '-');
}