import transformer from './transformer';
import generator from './generator';

export default (ast) => {
  const newAst = transformer(ast);
  const output = generator(newAst);

  if (!Array.isArray(output.styles)) {
    output.styles = [output.styles];
  }

  return output;
};
