// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/article': {
        target: '47.109.193.161:6677',
        changeOrigin: true,
      },
    },
  },
});
