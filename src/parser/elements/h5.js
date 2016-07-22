import BaseElement from './BaseElement'

export default class H5 extends BaseElement {
  getDefaultStyles() {
    return {
      display: 'block',
      color: 'black',
      font_weight: 'bold',
      font_size: '.83em'
    }
  }

  render() {
    return super.render();
  }
}
