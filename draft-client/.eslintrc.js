module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      'plugin:vue/vue3-essential', // or 'plugin:vue/vue3-recommended' for more rules
      'eslint:recommended',
      'plugin:prettier/recommended' // Add prettier/plugin to eslint
    ],
    parserOptions: {
      ecmaVersion: 2020
    },
    rules: {
      'prettier/prettier': 'error', // Make prettier errors show as ESLint errors
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  };
  