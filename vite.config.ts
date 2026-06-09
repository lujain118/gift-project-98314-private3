import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/gift-project-98314-private3/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});