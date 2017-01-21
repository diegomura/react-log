import cloneDeep from 'lodash.cloneDeep';
import traverser from './traverser';

/**
 * Given a node, it's parent and custom default styles (aka. props),
 * returns a new set of styles product of correct apply of styles hierarchies.
 *
 * In order of imporance:
 *  1. node own props
 *  2. parent's props
 *  3. default node type props
 *
 * This also creates a new type of node for string childs, called `text`.
**/
const mergeDefaultProps = (node, parent, defaultProps) => {
  const newProps = { ...defaultProps, ...parent.props, ...node.props };

  if (typeof newProps.children === 'string') {
    newProps.children = {
      type: 'text',
      props: { ...newProps }
    };
  }

  return newProps;
};

/**
 * Take the AST tree that we and pass it to our traverser function with a visitor.
 * Returns new AST with handy mutations to then generate the output
**/
const transformer = (ast) => {
  // Deep clone original ReactElement Tree to be able to mutate it
  const newAst = cloneDeep(ast);

  traverser(newAst, {
    div: {
      enter (node, parent) {
        node.props = mergeDefaultProps(node, parent, { color: 'black' });
      }
    },
    span: {
      enter (node, parent) {
        node.props = mergeDefaultProps(node, parent, { color: 'black' });
      }
    },
    h1: {
      enter (node, parent) {
        node.props = mergeDefaultProps(node, parent, {
          fontFamily: 'Times New Roman',
          fontSize: '32px',
          fontWeight: 'bold',
          color: 'black',
          margin: '12px 0px'
        });
      }
    },
    h2: {
      enter (node, parent) {
        node.props = mergeDefaultProps(node, parent, {
          fontFamily: 'Times New Roman',
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'black',
          margin: '12px 0px'
        });
      }
    },
    h3: {
      enter (node, parent) {
        node.props = mergeDefaultProps(node, parent, {
          fontFamily: 'Times New Roman',
          fontSize: '19px',
          fontWeight: 'bold',
          color: 'black',
          margin: '12px 0px'
        });
      }
    },
    h4: {
      enter (node, parent) {
        node.props = mergeDefaultProps(node, parent, {
          fontFamily: 'Times New Roman',
          fontSize: '16px',
          fontWeight: 'bold',
          color: 'black',
          margin: '12px 0px'
        });
      }
    },
    h5: {
      enter (node, parent) {
        node.props = mergeDefaultProps(node, parent, {
          fontFamily: 'Times New Roman',
          fontSize: '13px',
          fontWeight: 'bold',
          color: 'black',
          margin: '12px 0px'
        });
      }
    },
    h6: {
      enter (node, parent) {
        node.props = mergeDefaultProps(node, parent, {
          fontFamily: 'Times New Roman',
          fontSize: '11px',
          fontWeight: 'bold',
          color: 'black',
          margin: '12px 0px'
        });
      }
    },
    p: {
      enter (node, parent) {
        node.props = mergeDefaultProps(node, parent, {
          fontFamily: 'Times New Roman',
          fontSize: '16px',
          color: 'black'
        });
      }
    },
    a: {
      enter (node, parent) {
        node.props = mergeDefaultProps(node, parent, {
          fontFamily: 'Times New Roman',
          fontSize: '16px',
          color: 'blue',
          margin: '12px 0px',
          textDecoration: 'underline'
        });
      }
    }
  });

  return newAst;
};

export default transformer;
