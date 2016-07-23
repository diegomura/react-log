import BaseElement from './BaseElement'

export default class H1 extends BaseElement {
  getDefaultStyles() {
    return {
      display: 'block',
      color: 'black',
      fontWeight: 'bold',
      fontSize: '2em'
    }
  }

  render() {
    return super.render();
  }
}
