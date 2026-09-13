// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
  site: 'https://babcheck.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  markdown: {
    // 기본 GFM을 끄고 직접 넣는다. singleTilde:false → "10~30ng/mL"의 물결표 한 개는 취소선이 아니다.
    processor: unified({
      gfm: false,
      smartypants: false,
      remarkPlugins: [[remarkGfm, { singleTilde: false }]],
    }),
  },
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap()],
});
