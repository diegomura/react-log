import BaseElement from './BaseElement'

export default class Text extends BaseElement {
  render() {
    const { node } = this;
    
    return {
      markup: '%c' + node.markup,
      style: node.style
    }
  }
}
