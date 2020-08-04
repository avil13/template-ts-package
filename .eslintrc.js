module.exports = {
  root: true,

  env: {
    node: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    createDefaultProgram: true,
    project: './tsconfig.json',
  },

  plugins: [
    '@typescript-eslint',
  ],

  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],

  rules: {
    // JS
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',

    // TS
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
      },
    ],
  },

  parserOptions: {
    project: './tsconfig.json',
  },
};
