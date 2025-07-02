import { defineConfig } from 'vite';
import { resolve } from 'path';
import fse from 'fs-extra'; // file system extra

function copyAllSource() {
  return {
    name: 'copy-all-source',
    closeBundle() {
      fse.copySync('source', 'dist', {
        overwrite: true,
        filter: (src) => !src.endsWith('content.js') // let Vite replace content.js
      });
    }
  };
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        content: resolve(__dirname, 'source/content.js')
      },
      output: {
        entryFileNames: '[name].js'
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2020'
  },
  plugins: [copyAllSource()]
});