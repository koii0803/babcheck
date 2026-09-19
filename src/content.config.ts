import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 글 머리말(frontmatter) 규격 — gpub.py --pull 이 만든다
//   title:       제목
//   description: 한 줄 요약 (첫 굵은 문단)
//   pubDate:     2026-09-14  (발행일. 오늘 이후면 그날까지 숨김)
//   category:    fish | veg | oil | shell | ferment | grain | fruit | meat
//   thumbnail:   대표 이미지 주소 (없으면 분류 사진)
//   tags:        [태그, …]  글 끝에 칩으로 보임
//   notion_id:   노션 페이지 id (중복 방어)
//   draft:       true면 숨김
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    pubDate: z.coerce.date(),
    category: z.string().default('etc'),
    thumbnail: z.string().nullish(),
    tags: z.array(z.string()).default([]),
    notion_id: z.string().optional(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
