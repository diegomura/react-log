import BaseElement from './BaseElement'

export default class H6 extends BaseElement {
  getDefaultStyles() {
    return {
      display: 'block',
      color: 'black',
      fontWeight: 'bold',
      fontSize: '.67em'
    }
  }

  render() {
    return super.render();
  }
}
