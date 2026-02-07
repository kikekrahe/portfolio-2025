// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  image: {
    responsiveStyles: true,
    layout: 'constrained'
  },
  vite: {
    plugins: [tailwindcss(), yaml()]
  },

  integrations: [react()]
});