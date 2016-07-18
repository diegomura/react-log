export default function text(parser, node) {
  return {
    markup: '%c' + node.markup + '\n',
    style: node.style
  }
}
