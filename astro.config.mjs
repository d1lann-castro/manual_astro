// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://d1lann-castro,github.io',
  base: '/manual_astro',
  vite: {
    plugins: [tailwindcss()]
  }
});