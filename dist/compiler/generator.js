'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Code generator will recursively call itself to print each node in
 * the tree into an object with the following schema:
 *
 * {
 *   value: [string formatted to be printed],
 *   styles: [array of ordered set of styles to be applied]
 * }
**/
var generator = function generator(node) {
  var _node$props = node.props,
      children = _node$props.children,
      otherProps = _objectWithoutProperties(_node$props, ['children']);

  // Here we iterate through the ast tree until we run into a leaf node (of type text).


  var renderedChildren = void 0;
  if (node.type !== 'text') {
    if (Array.isArray(children)) {
      // If the node children is an array, we generate each child node
      // and merge it's values and styles.
      renderedChildren = children.map(generator);
      renderedChildren = {
        value: renderedChildren.map(function (child) {
          return child.value;
        }).join(''),
        styles: renderedChildren.reduce(function (accumulator, child) {
          return accumulator.concat(child.styles);
        }, [])
      };
    } else {
      // If the node child is another node, we simply generate it's represetation.
      renderedChildren = generator(children);
    }
  }

  // Here we mutate the result value or style, regarding the node's type.
  // Ex.
  //  * For a `div` element, we append a new line to generate the `display:block` attribute.
  //  * For a `text` element (leafs of the tree), we simple prepend a `%c` needed to apply styles.
  switch (node.type) {
    case 'body':
    case 'ul':
    case 'ol':
      return renderedChildren;
    case 'span':
      return {
        value: '%c' + renderedChildren.value,
        styles: renderedChildren.styles
      };
    case 'div':
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
    case 'p':
      return {
        value: '%c' + renderedChildren.value + '\n',
        styles: renderedChildren.styles
      };
    case 'a':
      var markup = renderedChildren.value ? renderedChildren.value + '  - ' : '';
      var newLine = node.props.display === 'block' ? '\n' : '';

      return {
        value: '%c' + markup + node.props.href + newLine,
        styles: renderedChildren.styles
      };
    case 'text':
      return {
        value: '' + children,
        styles: otherProps
      };
    case 'li':
      return {
        value: '%c' + node.props.bullet + ' ' + renderedChildren.value + '\n',
        styles: renderedChildren.styles
      };
    default:
      throw new TypeError(node.type);
  }
};

exports.default = generator;