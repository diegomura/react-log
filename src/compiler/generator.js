import logElements from './elements';

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
  const { children, ...otherProps } = node.props;

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
        ),
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
    case 'span':
      return renderedChildren;
    case 'div':
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
    case 'p':
      return {
        value: `${renderedChildren.value}\n`,
        styles: renderedChildren.styles,
      };
    case 'a':
      const markup = renderedChildren.value ? `${renderedChildren.value}  - ` : '';
      return {
        value: markup + node.props.href,
        styles: renderedChildren.styles,
      };
    case 'text':
      return {
        value: `%c${children}`,
        styles: otherProps,
      };
    default:
      throw new TypeError(node.type);
  }
};

export default generator;
