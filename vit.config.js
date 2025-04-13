// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  server: {
    port: 5173,
    open: true, // auto-opens browser
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
    jsx: 'automatic',
    include: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  }
});