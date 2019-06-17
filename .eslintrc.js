module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:nestjs/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      tsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'nestjs'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': ['error', { allow: ['info', 'error'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
