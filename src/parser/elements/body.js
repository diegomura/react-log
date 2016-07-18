export default function body(parser, node) {
  let children = [];

  if (node.props) {
    children = node.props.children;
    children = Array.isArray(children) ? children : [children];
  }

  return children.map((item) => parser(item, {}));
}
