export default function logParser(node, style) {
  let children = [];

  if (node.props) {
    children = node.props.children;
    children = Array.isArray(children) ? children : [children];
  }

  if (typeof(node) == 'string') {
    node = {type: 'string', markup: node, style: style};
  }

  switch (node.type) {
  case 'body':
    return children.map((item) => logParser(item, {}));

  case 'h1':
    return logParser(children[0], {color: 'black', font_weight: 'bold', font_size: '2em'});

  case 'h2':
    return logParser(children[0], {color: 'black', font_weight: 'bold', font_size: '1.5em'});

  case 'h3':
    return logParser(children[0], {color: 'black', font_weight: 'bold', font_size: '1.17em'});

  case 'h4':
    return logParser(children[0], {color: 'black', font_weight: 'bold', font_size: '1.17em'});

  case 'h5':
    return logParser(children[0], {color: 'black', font_weight: 'bold', font_size: '.83em'});

  case 'h6':
    return logParser(children[0], {color: 'black', font_weight: 'bold', font_size: '.67em'});

  case 'string':
    return { markup: '%c' + node.markup + '\n', style: node.style };

  default:
    throw new TypeError(node.type);
  }
}
