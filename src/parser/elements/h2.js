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

  return parser(children[0], defaultStyles);
}
