'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash.cloneDeep');

var _lodash2 = _interopRequireDefault(_lodash);

var _traverser = require('./traverser');

var _traverser2 = _interopRequireDefault(_traverser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given a node, it's parent and custom default styles (aka. props),
 * returns a new set of styles product of correct apply of styles hierarchies.
 *
 * In order of imporance:
 *  1. node own props
 *  2. parent's props
 *  3. default node type props
 *
 * This also creates a new type of node for string childs, called `text`.
**/
var mergeDefaultProps = function mergeDefaultProps(node, parent, defaultProps) {
  var newProps = _extends({}, defaultProps, parent.props, node.props);

  if (typeof newProps.children === 'string') {
    newProps.children = {
      type: 'text',
      props: _extends({}, newProps)
    };
  } else {
    newProps.children = Array.isArray(newProps.children) ? newProps.children : [newProps.children];
    newProps.children = newProps.children.map(function (child) {
      if (typeof child === 'string') {
        return {
          type: 'text',
          props: _extends({}, newProps, { children: child })
        };
      }
      return child;
    });
  }

  return newProps;
};

/**
 * Take the AST tree that we and pass it to our traverser function with a visitor.
 * Returns new AST with handy mutations to then generate the output
**/
var transformer = function transformer(ast) {
  // Deep clone original ReactElement Tree to be able to mutate it
  var newAst = (0, _lodash2.default)(ast);

  (0, _traverser2.default)(newAst, {
    div: {
      enter: function enter(node, parent) {
        node.props = mergeDefaultProps(node, parent, { color: 'black' });
      }
    },
    span: {
      enter: function enter(node, parent) {
        node.props = mergeDefaultProps(node, parent, { color: 'black' });
      }
    },
    h1: {
      enter: function enter(node, parent) {
        node.props = mergeDefaultProps(node, parent, {
          fontFamily: 'Times New Roman',
          fontSize: '32px',
          fontWeight: 'bold',
          color: 'black',
          margin: '12px 0px'
        });
      }
    },
    h2: {
      enter: function enter(node, parent) {
        node.props = mergeDefaultProps(node, parent, {
          fontFamily: 'Times New Roman',
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'black',
          margin: '12px 0px'
        });
      }
    },
    h3: {
      enter: function enter(node, parent) {
        node.props = mergeDefaultProps(node, parent, {
          fontFamily: 'Times New Roman',
          fontSize: '19px',
          fontWeight: 'bold',
          color: 'black',
          margin: '12px 0px'
        });
      }
    },
    h4: {
      enter: function enter(node, parent) {
        node.props = mergeDefaultProps(node, parent, {
          fontFamily: 'Times New Roman',
          fontSize: '16px',
          fontWeight: 'bold',
          color: 'black',
          margin: '12px 0px'
        });
      }
    },
    h5: {
      enter: function enter(node, parent) {
        node.props = mergeDefaultProps(node, parent, {
          fontFamily: 'Times New Roman',
          fontSize: '13px',
          fontWeight: 'bold',
          color: 'black',
          margin: '12px 0px'
        });
      }
    },
    h6: {
      enter: function enter(node, parent) {
        node.props = mergeDefaultProps(node, parent, {
          fontFamily: 'Times New Roman',
          fontSize: '11px',
          fontWeight: 'bold',
          color: 'black',
          margin: '12px 0px'
        });
      }
    },
    p: {
      enter: function enter(node, parent) {
        node.props = mergeDefaultProps(node, parent, {
          fontFamily: 'Times New Roman',
          fontSize: '16px',
          color: 'black'
        });
      }
    },
    a: {
      enter: function enter(node, parent) {
        node.props = mergeDefaultProps(node, parent, {
          fontFamily: 'Times New Roman',
          fontSize: '16px',
          color: 'blue',
          margin: '12px 0px',
          textDecoration: 'underline'
        });
      }
    },
    ol: {
      enter: function enter(node, parent) {
        // Used to track `li`s index
        node._index = 1;
      }
    },
    li: {
      enter: function enter(node, parent) {
        var bullet = parent.type === 'ol' ? parent._index++ + ' -' : '•';

        node.props = mergeDefaultProps(node, parent, {
          fontFamily: 'Times New Roman',
          fontSize: '16px',
          color: 'black',
          bullet: bullet
        });
      }
    }
  });

  return newAst;
};

exports.default = transformer;