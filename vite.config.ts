import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/reformas/',
  build: {
    outDir: 'dist',
    assetsDir: '',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]',
        entryFileNames: '[name].js'
      }
    }
  }
});
