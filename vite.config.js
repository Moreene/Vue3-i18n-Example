import { fileURLToPath, URL } from 'node:url';
import AutoImport from 'unplugin-auto-import/vite';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Vue3-i18n-Example/',
  plugins: [
    vue(),
    AutoImport({
      imports:['vue','vue-router','vue-i18n']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  }
});
