import { defineConfig } from 'vite';

// Minimal static-site config — no framework plugin needed since
// the page is plain HTML/CSS/JS (no React, no Tailwind build step).
export default defineConfig({
  build: {
    outDir: 'dist',
  },
});
