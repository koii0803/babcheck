export const SITE = {
  name: 'babcheck',
  title: '밥체크',
  tagline: '먹기 전에 한 번, 숫자로 확인',
  description: '식재료·음식의 효능과 주의점을 공공기관 수치와 출처로 확인하는 곳.',
  url: 'https://babcheck.bobomusic83.workers.dev',
  lang: 'ko',
  email: 'contact@example.com', // 연락처 원고 받으면 교체
  categories: {} as Record<string, string>, // slug: 표시이름. 분류 확정되면 채운다.
};

export const fmtDate = (d: Date) =>
  `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
