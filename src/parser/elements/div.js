export default function div(parser, node) {
  const defaultStyles = {
    color: 'black'
  }

  let children = [];

  if (node.props) {
    children = node.props.children;
    children = Array.isArray(children) ? children : [children];
  }

  let style = {...defaultStyles, ...node.props};

  return parser(children[0], style);
}
