module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: ['./tsconfig.json'],
    sourceType: 'module'

  },
  plugins: [
    'vue'
  ],
  rules: {
    '@typescript-eslint/triple-slash-reference': 'off'
  }
}
