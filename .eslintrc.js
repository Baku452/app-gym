module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier', 'react-app'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'linebreak-style': ['warn', 'unix'],
    semi: ['warn', 'always'],
    'no-undef': ['warn'],
  },
};
