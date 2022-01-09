module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    indent: ['4', 'tab'],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'no-undef': ['warn'],
  },
};
