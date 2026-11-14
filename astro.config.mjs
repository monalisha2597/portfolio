import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://monalishachatterjee.com',
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
});