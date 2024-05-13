import jslint from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';
import tslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{mjs,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react: reactPlugin
    },
    rules: {
      ...jslint.configs.recommended.rules
    }
  },
  ...tslint.configs.recommended,
  pluginPrettier,

  /* override recommended config */
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
];
