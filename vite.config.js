import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Base public path for GitHub Pages deployment. 
  // Change to '/YOUR_REPOSITORY_NAME/' for gh-pages, or keep '/' if using custom domain.
  base: '/bambiroom/',
  build: {
    rollupOptions: {
      input: {
        // Multi-Page App entry points
        lumina: resolve(__dirname, 'products/lumina/index.html'),
        massager: resolve(__dirname, 'products/massager/index.html'),
        template: resolve(__dirname, 'products/template/index.html'),
        'baby-chair': resolve(__dirname, 'products/baby-chair/index.html'),
      }
    }
  }
});
