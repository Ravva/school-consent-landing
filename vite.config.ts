import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Базовый путь для GitHub Pages, в development — пустой
  base: process.env.NODE_ENV === 'production' ? '/school-consent-landing/' : '/',

  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  
  plugins: [react()],
  
  // Удалили блок define с ключами API
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
  
  build: {
    // Явное указание папки сборки (стандарт для большинства CI/CD)
    outDir: 'dist',
  }
});

