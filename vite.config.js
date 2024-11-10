// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude:['**/*.PNG'],
  server: {
    cors: true,
    proxy: {
      '/api': {
        target: 'http://10.7.127.121:7579/',
        // target: 'http://127.0.0.1:7579',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
  },
});
