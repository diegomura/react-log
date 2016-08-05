import BaseElement from './BaseElement'

export default class Text extends BaseElement {
  getOffset(property) {
    const { node } = this;

    if (property) {
      const marginRegex = /\d+/g;
      const marginMatch = property.match(marginRegex).map((m) => parseInt(m));

      switch (marginMatch.length) {
        case 2:
          return { top: marginMatch[0], bottom: marginMatch[0], left: marginMatch[1], right: marginMatch[1] }
        case 4:
          return { top: marginMatch[0], bottom: marginMatch[2], left: marginMatch[3], right: marginMatch[1] }
        default:
          return { top: marginMatch[0], bottom: marginMatch[0], left: marginMatch[0], right: marginMatch[0] }
      }
    }

    return { top: 0, bottom: 0, left: 0, right: 0 }
  }

  getFontSize() {
    const { node } = this;

    if (node.style.fontSize) {
      const regex = /^(\d+(?:\.\d+)?)(.*)$/
      const fontSizeMatch = node.style.fontSize.match(regex)

      return parseInt(fontSizeMatch[1])
    }

    return 0;
  }

  render() {
    const { node } = this;

    const margin = this.getOffset(node.style.margin);
    const padding = this.getOffset(node.style.padding);
    const lineHeight = margin.top + margin.bottom + padding.top + padding.bottom + this.getFontSize();

    return {
      markup: '%c' + node.markup,
      style: {
        lineHeight: lineHeight + 'px',
        marginLeft: margin.left,
        marginRight: margin.right,
        paddingLeft: padding.left,
        paddingRight: padding.right,
        ...node.style
      }
    }
  }
}
