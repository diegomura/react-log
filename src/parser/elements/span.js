export default function span(parser, node) {
  const defaultStyles = {
    color: 'black'
  }

  let children = [];

  if (node.props) {
    children = node.props.children;
    children = Array.isArray(children) ? children : [children];
  }

  let parsedElement = parser(children[0], {...defaultStyles, ...node.props});

  if (parsedElement.style.display && parsedElement.style.display == 'block') {
    parsedElement.markup += '\n';
  }

  return parsedElement;
}
