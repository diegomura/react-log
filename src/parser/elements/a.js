import BaseElement from './BaseElement'

export default class H1 extends BaseElement {
  getDefaultStyles() {
    return {
      color: 'blue',
      text_decoration: 'underline'
    }
  }

  render() {
    const { node, parser } = this;

    if (node.props.children) {
      let renderedElement = super.render();

      renderedElement.markup += ' - ' + node.props.href;

      return renderedElement;
    } else {
      return {
        markup: '%c' + node.props.href,
        style: {...this.getDefaultStyles(), ...node.props}
      }
    }
  }
}
