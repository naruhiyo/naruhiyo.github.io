import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import eslintPlugin from 'vite-plugin-eslint';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default () => {
  const SRC_PATH = 'src';
  const OUTPUT_PATH = 'build';

  return defineConfig({
    root: path.resolve(__dirname, SRC_PATH),
    resolve: {
      alias: [
        {
          find: '@src',
          replacement: path.resolve(__dirname, SRC_PATH)
        }
      ],
      extensions: ['.js', '.ts', '.tsx']
    },
    plugins: [
      // compile react
      react(),
      // generate html
      createHtmlPlugin(),
      // lint
      eslintPlugin({
        fix: true
      }),
      // compress
      viteCompression()
    ],
    publicDir: path.resolve(__dirname, `${SRC_PATH}/assets`),
    // production build
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'vendor.[hash].js',
          entryFileNames: '[name].[hash].js'
        }
      },
      outDir: path.resolve(__dirname, OUTPUT_PATH),
      emptyOutDir: true
    },
    // local dev
    server: {
      host: '0.0.0.0',
      port: 8888
    },
    // ssg
    ssr: {
      noExternal: ['@mui/material']
    },
    ssgOptions: {
      crittersOptions: {
        preload: 'media'
      }
    }
  });
};
