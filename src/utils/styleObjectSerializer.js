import paramCase from 'param-case';

export function serializeStyleObject(styleObject) {
  let serializedObject = '';

  for (let key in styleObject) {
    if (styleObject.hasOwnProperty(key)) {
      serializedObject += `${paramCase(key)}:${styleObject[key]};`;
    }
  }

  return serializedObject.replace('_', '-');
}
