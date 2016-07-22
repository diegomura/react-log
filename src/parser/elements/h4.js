import BaseElement from './BaseElement'

export default class H4 extends BaseElement {
  getDefaultStyles() {
    return {
      display: 'block',
      color: 'black',
      font_weight: 'bold',
      font_size: '1.17em'
    }
  }

  render() {
    return super.render();
  }
}
