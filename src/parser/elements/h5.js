import BaseElement from './BaseElement'

export default class H5 extends BaseElement {
  getDefaultStyles() {
    return {
      display: 'block',
      color: 'black',
      fontWeight: 'bold',
      fontSize: '.83em'
    }
  }

  render() {
    return super.render();
  }
}
