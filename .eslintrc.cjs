module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],

  plugins: ['@typescript-eslint', 'prettier'],

  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/script-setup-no-uses-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        semi: false,
      },
    ],
  },
}
