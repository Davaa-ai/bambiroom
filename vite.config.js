import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Relative asset paths keep nested product pages working on the custom domain.
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        // Multi-Page App entry points
        'baby-chair-short': resolve(__dirname, 'baby-chair/index.html'),
        lumina: resolve(__dirname, 'products/lumina/index.html'),
        massager: resolve(__dirname, 'products/massager/index.html'),
        template: resolve(__dirname, 'products/template/index.html'),
        'baby-chair': resolve(__dirname, 'products/baby-chair/index.html'),
      }
    }
  }
});
