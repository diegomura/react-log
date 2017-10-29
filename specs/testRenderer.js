const React = require('react');
import compiler from '../src/compiler';
import { serializeStyleObject } from '../src/utils/styleObjectSerializer';

export default children => {
  const body = React.createElement('body', null, children);
  const compiledData = compiler(body);
  const styles = compiledData.styles.map((item) => serializeStyleObject(item));

  return `${compiledData.value} ${styles}`;
};
