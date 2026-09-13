import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 글 머리말(frontmatter) 규격 — 노션 글 맨 위에 붙이는 5줄
//   title:       제목
//   description: 한 줄 요약 (검색 결과·SNS 미리보기)
//   pubDate:     2026-09-14
//   category:    분류 slug (영문 소문자, 주소가 된다)
//   thumbnail:   대표 이미지 주소 (없으면 비움)
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    pubDate: z.coerce.date(),
    category: z.string().default('etc'),
    thumbnail: z.string().nullish(),
    tags: z.array(z.string()).default([]),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
