// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://eazy.family',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', de: 'de-CH', fr: 'fr-CH', it: 'it-CH' }
      }
    }),
    mdx()
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'it'],
    routing: { prefixDefaultLocale: false }
  }
});
