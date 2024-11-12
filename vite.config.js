// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import gzipPlugin from 'rollup-plugin-gzip';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), gzipPlugin()],
  assetsInclude: ['**/*.PNG'],
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
