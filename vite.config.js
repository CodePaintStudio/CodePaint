// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/article': {
        target: 'http://10.7.127.121:7579',
        changeOrigin: true,
      },
      '/details': {
        target: 'http://10.7.127.121:7579',
        changeOrigin: true,
      },
    },
  },
});
