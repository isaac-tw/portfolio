module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      'tsconfig.json',
      'cypress/tsconfig.json'
    ]
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': ['warn', 'always'],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', 'never'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    indent: 'off',
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        },
        multilineDetection: 'brackets'
      }
    ]
  }
};
