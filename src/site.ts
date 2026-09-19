export const SITE = {
  name: 'babcheck',
  title: '밥체크',
  tagline: '먹기 전에 한 번, 숫자로 확인',
  description: '제철 수산물과 천연 식재료, 먹기 전에 숫자로 확인합니다.',
  url: 'https://babcheck.com',
  lang: 'ko',
  email: 'support@babcheck.com',
  ogImage: '/img/og-default.jpg',
};

// 분류 8개 (2026-09-20 곡물·과일·고기 추가). 글 머리말의 category 칸에 slug(왼쪽 키)를 적는다.
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
  // 아래 3개 사진은 임시(채소·생선 사진 복사) — 교체 필요 (2026-09-20)
  grain: {
    name: '곡물·콩·견과',
    short: '곡물·견과',
    desc: '얼마나 불리고 어떻게 볶는지, 한 줌이 몇 칼로리인지.',
    image: '/img/cat-grain.webp',
  },
  fruit: {
    name: '제철 과일',
    short: '과일',
    desc: '언제가 제철인지, 당은 얼마나 되는지, 씨와 껍질은 먹어도 되는지.',
    image: '/img/cat-fruit.webp',
  },
  meat: {
    name: '고기·알',
    short: '고기·알',
    desc: '부위별 지방은 얼마인지, 어느 온도까지 익혀야 안전한지.',
    image: '/img/cat-meat.webp',
  },
};

export const catName = (slug: string) => CATEGORIES[slug]?.name ?? slug;
export const catImage = (slug: string) => CATEGORIES[slug]?.image;

export const fmtDate = (d: Date) =>
  `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
