// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkGfm from 'remark-gfm';

// 본문 안 외부 링크(http로 시작)는 새 창 + noopener. 내부 링크(/posts/…)는 현재 창 그대로.
function externalLinks() {
  return (tree) => {
    const walk = (n) => {
      if (n.type === 'element' && n.tagName === 'a' && /^https?:\/\//.test(String(n.properties?.href ?? ''))) {
        n.properties.target = '_blank';
        n.properties.rel = 'noopener noreferrer';
      }
      (n.children ?? []).forEach(walk);
    };
    walk(tree);
  };
}

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
      rehypePlugins: [externalLinks],
    }),
  },
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap()],
});
