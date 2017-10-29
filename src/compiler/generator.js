/**
 * Code generator will recursively call itself to print each node in
 * the tree into an object with the following schema:
 *
 * {
 *   value: [string formatted to be printed],
 *   styles: [array of ordered set of styles to be applied]
 * }
**/
const generator = (node) => {
  const { children, style, ...otherProps } = node.props;

  // Here we iterate through the ast tree until we run into a leaf node (of type text).
  let renderedChildren;
  if (node.type !== 'text') {
    if (Array.isArray(children)) {
      // If the node children is an array, we generate each child node
      // and merge it's values and styles.
      renderedChildren = children.map(generator);
      renderedChildren = {
        value: renderedChildren.map(child => child.value).join(''),
        styles: renderedChildren.reduce((accumulator, child) => (
          accumulator.concat(child.styles)), []
        )
      };
    } else {
      // If the node child is another node, we simply generate it's represetation.
      renderedChildren = generator(children);
    }
  }

  // Prevent generating two consecutive `%c`. This might happen on nesting elements
  const hasStyle = renderedChildren ? renderedChildren.value.indexOf('%c') === 0 : false;
  const stylePrefix = hasStyle ? '' : '%c';

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
        value: `${stylePrefix}${renderedChildren.value}`,
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
        value: `${stylePrefix}${renderedChildren.value}\n`,
        styles: renderedChildren.styles
      };
    case 'a':
      const markup = renderedChildren.value ? `${renderedChildren.value}  - ` : '';
      const newLine = node.props.display === 'block' ? '\n' : '';

      return {
        value: stylePrefix + markup + node.props.href + newLine,
        styles: renderedChildren.styles
      };
    case 'text':
      return {
        value: `${children}`,
        styles: {...otherProps, ...style}
      };
    case 'li':
      return {
        value: `${stylePrefix}${node.props.bullet} ${renderedChildren.value}\n`,
        styles: renderedChildren.styles
      };
    default:
      throw new TypeError(node.type);
  }
};

export default generator;
