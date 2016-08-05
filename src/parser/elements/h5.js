import BaseElement from './BaseElement'

export default class H5 extends BaseElement {
  getDefaultStyles() {
    return {
      display: 'block',
      fontFamily: 'Times New Roman',
      fontSize: '13px',
      fontWeight: 'bold',
      color: 'black',
      margin: '12px 0px'
    }
  }

  render() {
    return super.render();
  }
}
