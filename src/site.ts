export const SITE = {
  name: 'babcheck',
  title: '밥체크',
  tagline: '먹기 전에 한 번, 숫자로 확인',
  description: '제철 수산물과 천연 식재료, 먹기 전에 숫자로 확인합니다.',
  url: 'https://babcheck.bobomusic83.workers.dev',
  lang: 'ko',
  email: 'contact@example.com', // 연락처 원고 받으면 교체
  ogImage: '/img/og-default.jpg',
};

// 분류 5개. 글 머리말의 category 칸에 slug(왼쪽 키)를 적는다.
export const CATEGORIES: Record<string, { name: string; short: string; desc: string; image: string }> = {
  fish: {
    name: '제철 연안 생선',
    short: '생선',
    desc: '어떤 게 국산인지, 언제가 제철인지, 어떻게 손질하는지.',
    image: '/img/cat-fish.webp',
  },
  veg: {
    name: '약선 채소·해조',
    short: '채소·해조',
    desc: '얼마나 불리고 어떻게 씻는지, 얼마나 먹어야 효과가 있는지.',
    image: '/img/cat-veg.webp',
  },
  oil: {
    name: '천연 오일·지방',
    short: '오일',
    desc: '어느 온도까지 견디는지, 어떻게 두면 안 상하는지.',
    image: '/img/cat-oil.webp',
  },
  shell: {
    name: '갯벌 패류·고둥',
    short: '패류',
    desc: '해감은 몇 시간, 삶기는 몇 분, 젓는 방향은 어느 쪽인지.',
    image: '/img/cat-shell.webp',
  },
  ferment: {
    name: '발효·특수 수산',
    short: '발효',
    desc: '삭힌 냄새는 안전한지, 비슷한 것과 어떻게 가려내는지.',
    image: '/img/cat-ferment.webp',
  },
};

export const catName = (slug: string) => CATEGORIES[slug]?.name ?? slug;
export const catImage = (slug: string) => CATEGORIES[slug]?.image;

export const fmtDate = (d: Date) =>
  `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
