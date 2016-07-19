export default function a(parser, node) {
  const defaultStyles = {
    color: 'blue',
    text_decoration: 'underline'
  }

  let children = [];

  if (node.props) {
    children = node.props.children;
    children = Array.isArray(children) ? children : [children];
  }

  if (children[0]) {
    let parsedElement = parser(children[0], {...defaultStyles, ...node.props});

    if (parsedElement.style.display && parsedElement.style.display == 'block') {
      parsedElement.markup += '\n';
    }

    parsedElement.markup += ' - ' + node.props.href;

    return parsedElement;
  } else {
    return {
      markup: '%c' + node.props.href,
      style: {...defaultStyles, ...node.props}
    }
  }
}
