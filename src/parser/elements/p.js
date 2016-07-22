import BaseElement from './BaseElement'

export default class P extends BaseElement {
  getDefaultStyles() {
    return {
      display: 'block',
      color: 'black',
      margin_left: '8px'
    }
  }

  render() {
    return super.render();
  }
}
