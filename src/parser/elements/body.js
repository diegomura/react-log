export default class Body {
  constructor(node, parser) {
    this.node = node;
    this.parser = parser;
  }

  render() {
    const { node, parser } = this;

    let children = [];

    if (node.props) {
      children = node.props.children;
      children = Array.isArray(children) ? children : [children];
    }

    return children.map((item) => parser(item, {}));
  }
}
