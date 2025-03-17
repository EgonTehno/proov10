import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/proov10/', // Make sure this matches your repo name
  plugins: [react()],
  build: {
    minify: true,
    outDir: 'dist',
  },
});
