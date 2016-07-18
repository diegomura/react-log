import logElements from './elements'

export default function parser(node, style) {
  if (typeof(node) == 'string') {
    node = {type: 'text', markup: node, style: style};
  }

  if (!logElements[node.type]) {
    throw new TypeError(node.type);
  }

  return logElements[node.type](parser, node);
}
