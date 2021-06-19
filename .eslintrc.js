module.exports = {
  root: true,
  env: {
    node: true,
    mocha: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'indent': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-tabs': 'off',
    'indent': 'off',
    'no-proto': 'off',
    'prefer-const': 'off',
    'no-unused-vars': 'off',
    'space-before-function-paren': 'off',
    'quote-props': 'off',
    'quotes': 'off',
    'no-console': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
