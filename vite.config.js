import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default () => {
  const IS_PROD = process.env.NODE_ENV === 'production';
  const SRC_PATH = 'src';
  const OUTPUT_PATH = IS_PROD ? 'build' : 'dist';

  return defineConfig({
    root: path.resolve(__dirname, SRC_PATH),
    resolve: {
      alias: [
        {
          find: '@src',
          replacement: path.resolve(__dirname, SRC_PATH)
        }
      ],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    plugins: [
      // compile react
      react(),
      // generate html
      createHtmlPlugin(),
      // lint
      eslintPlugin()
    ],
    publicDir: path.resolve(__dirname, `${SRC_PATH}/assets`),
    build: {
      outDir: path.resolve(__dirname, OUTPUT_PATH),
      emptyOutDir: true
    }
  });
};
