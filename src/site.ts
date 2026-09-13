export const SITE = {
  name: 'babcheck',
  title: '밥체크',
  tagline: '먹기 전에 한 번, 숫자로 확인',
  description: '제철 수산물과 천연 식재료의 구별법·손질·보관·효능을 공공기관 수치와 출처로 확인하는 곳.',
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
    desc: '갈치·가숭어·도다리·도루묵·박대·학공치. 유사 어종 구별과 제철, 손질과 굽는 온도.',
    image: '/img/cat-fish.webp',
  },
  veg: {
    name: '약선 채소·해조',
    short: '채소·해조',
    desc: '목이버섯·차조기·우뭇가사리·분말한천. 불리는 시간, 잔류농약 세척, 효능 수치.',
    image: '/img/cat-veg.webp',
  },
  oil: {
    name: '천연 오일·지방',
    short: '오일',
    desc: '들기름·옥수수유·아마인유·레시틴. 발연점, 냉압착과 고온압착, 산패 없는 보관.',
    image: '/img/cat-oil.webp',
  },
  shell: {
    name: '갯벌 패류·고둥',
    short: '패류',
    desc: '새꼬막·대수리·고둥. 해감 공식, 삶는 시간, 알맹이 안 붙게 젓는 방향.',
    image: '/img/cat-shell.webp',
  },
  ferment: {
    name: '발효·특수 수산',
    short: '발효',
    desc: '홍어·삭힘·삼합·상어. 암모니아 안전성, 가오리와 구별하는 법.',
    image: '/img/cat-ferment.webp',
  },
};

export const catName = (slug: string) => CATEGORIES[slug]?.name ?? slug;
export const catImage = (slug: string) => CATEGORIES[slug]?.image;

export const fmtDate = (d: Date) =>
  `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
