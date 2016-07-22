import BaseElement from './BaseElement'

export default class H1 extends BaseElement {
  getDefaultStyles() {
    return {
      display: 'block',
      color: 'black',
      font_weight: 'bold',
      font_size: '2em'
    }
  }

  render() {
    return super.render();
  }
}
