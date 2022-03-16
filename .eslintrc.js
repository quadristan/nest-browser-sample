module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:json/recommended',
    'plugin:markdown/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: [
    '**/build/**/*',
    '**/node_modules/**/*',
    'pnpm-lock.yaml',
    'LICENSE'
  ],
  rules: {}
}
