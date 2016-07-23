import BaseElement from './BaseElement'

export default class H2 extends BaseElement {
  getDefaultStyles() {
    return {
      display: 'block',
      color: 'black',
      fontWeight: 'bold',
      fontSize: '1.5em'
    }
  }

  render() {
    return super.render();
  }
}
