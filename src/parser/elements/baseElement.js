export default class BaseElement {
  constructor(node, parser) {
    this.node = node;
    this.parser = parser;
  }

  getDefaultStyles() {
    return {};
  }

  render() {
    const { node, parser } = this;

    let children = [];

    if (node.props) {
      children = node.props.children;
      children = Array.isArray(children) ? children : [children];
    }

    const parsedElement = parser(children[0], { ...this.getDefaultStyles(), ...node.props });

    if (parsedElement.style.display && parsedElement.style.display === 'block') {
      parsedElement.markup += '\n';
    }

    return parsedElement;
  }
}
