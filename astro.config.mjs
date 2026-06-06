// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://amlan9387975760.github.io',
  base: '/project-engineer-electrical',
  vite: {
    plugins: [tailwindcss()]
  }
});
