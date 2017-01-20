import BaseElement from './BaseElement';

export default class P extends BaseElement {
  getDefaultStyles() {
    return {
      display: 'block',
      fontFamily: 'Times New Roman',
      fontSize: '16px',
      color: 'black',
    };
  }

  render() {
    return super.render();
  }
}
