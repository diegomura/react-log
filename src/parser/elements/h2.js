export default function h2(parser, node) {
  const defaultStyles = {
    color: 'black',
    font_weight: 'bold',
    font_size: '1.5em'
  }

  let children = [];

  if (node.props) {
    children = node.props.children;
    children = Array.isArray(children) ? children : [children];
  }

  let style = {...defaultStyles, ...node.props};

  return parser(children[0], style);
}
