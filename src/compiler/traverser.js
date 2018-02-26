/**
 * Visits each node of the AST calling specific callbacks for each node type.
**/
const traverser = (ast, visitor) => {
  function traverseArray (array, parent) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }

  function traverseNode (node, parent) {
    const methods = visitor[node.type];

    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    switch (node.type) {
      case 'body':
      case 'div':
      case 'span':
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
      case 'p':
      case 'a':
      case 'ul':
      case 'ol':
      case 'li':
        if (Array.isArray(node.props.children)) {
          traverseArray(node.props.children, node);
        } else {
          traverseNode(node.props.children, node);
        }
        break;
      case 'text':
      case 'img':
        break;
      default:
        throw new TypeError(node.type);
    }

    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  traverseNode(ast, null);
};

export default traverser;
