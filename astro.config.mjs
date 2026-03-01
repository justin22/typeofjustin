import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    mdx({
      rehypePlugins: [rehypeSlug],
      remarkPlugins: [remarkGfm],
    }),
  ],
  site: 'https://typeofjust.in',
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
