import BaseElement from './BaseElement';

export default class H1 extends BaseElement {
  getDefaultStyles() {
    return {
      fontFamily: 'Times New Roman',
      fontSize: '16px',
      color: 'blue',
      margin: '12px 0px',
      textDecoration: 'underline',
    };
  }

  render() {
    const { node, parser } = this;
    let markup = '';

    if (node.props.children) {
      markup += `${node.props.children}  - `;
    }

    markup += node.props.href;

    return parser(markup, { ...this.getDefaultStyles(), ...node.props });
  }
}
