import BaseElement from './BaseElement'

export default class H6 extends BaseElement {
  getDefaultStyles() {
    return {
      display: 'block',
      color: 'black',
      font_weight: 'bold',
      font_size: '.67em'
    }
  }

  render() {
    return super.render();
  }
}
