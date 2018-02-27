module.exports = Object.assign({}, require('./eslintrc.json'), {
  extends: [ require.resolve('eslint-config-standard-jsx') ]
})
