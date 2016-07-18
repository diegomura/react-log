export function serializeStyleObject(styleObject) {
  let serializedObject = '';

  for (var key in styleObject) {
    if (styleObject.hasOwnProperty(key)) {
      serializedObject += key.replace('_', '-') + ':' + styleObject[key] + ';';
    }
  }

  return serializedObject.replace('_', '-');
}
