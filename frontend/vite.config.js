import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()); // only VITE_ prefixed vars

  return {
    base: '/',
    plugins: [react()],
    server: {
      port: 5174,
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL || 'http://localhost:7001',
          changeOrigin: true,
          secure: false,
        },
      },
      historyApiFallback: true,
    },
    build: {
      outDir: 'dist',
    },
    optimizeDeps: {
      exclude: ['stripe'],
    },
  };
});