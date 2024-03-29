module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': 'error'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.ts', '.tsx']
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx']
      }
    },
    react: {
      version: 'detect'
    }
  }
};
