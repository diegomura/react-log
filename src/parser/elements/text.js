export default function text(parser, node) {
  return {
    markup: '%c' + node.markup,
    style: node.style
  }
}
