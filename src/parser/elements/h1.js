import BaseElement from './baseElement'

export default class H1 extends BaseElement {
  getDefaultStyles() {
    return {
      display: 'block',
      fontFamily: 'Times New Roman',
      fontSize: '32px',
      fontWeight: 'bold',
      color: 'black',
      margin: '12px 0px',
    }
  }

  render() {
    return super.render();
  }
}
