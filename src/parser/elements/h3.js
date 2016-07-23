import BaseElement from './BaseElement'

export default class H3 extends BaseElement {
  getDefaultStyles() {
    return {
      display: 'block',
      color: 'black',
      fontWeight: 'bold',
      fontSize: '1.17em'
    }
  }

  render() {
    return super.render();
  }
}
