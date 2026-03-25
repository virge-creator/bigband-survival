// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://virge-creator.github.io',
  base: '/bigband-survival',
  vite: {
    plugins: [tailwindcss()],
  },
});
