import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.js'),
      name: 'LumaUI',
      fileName: 'lumaui',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
});