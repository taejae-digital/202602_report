export interface Quote {
  id: string
  text: string
  author: string
  authorEn: string
  source: string
  year: number
}

export const quotes: Quote[] = [
  {
    id: 'perez-golden',
    text: '기술의 혜택이 사회 전체로 퍼진 황금기는 제도적 재편에 성공한 경우에만 도달했다.',
    author: '카를로타 페레즈',
    authorEn: 'Carlota Perez',
    source: 'Technological Revolutions and Financial Capital',
    year: 2002,
  },
  {
    id: 'acemoglu-choice',
    text: '기술 발전이 자동으로 번영을 가져오지 않는다. 제도적 선택이 결과를 결정한다.',
    author: '대런 아세모글루 & 사이먼 존슨',
    authorEn: 'Daron Acemoglu & Simon Johnson',
    source: 'Power and Progress',
    year: 2023,
  },
  {
    id: 'smith-invisible',
    text: '각자가 자기 이익을 추구하는 과정에서 의도하지 않은 사회적 질서가 생겨난다.',
    author: '애덤 스미스',
    authorEn: 'Adam Smith',
    source: 'The Wealth of Nations',
    year: 1776,
  },
  {
    id: 'polanyi-double',
    text: '시장이 사회를 삼키려 하면, 사회가 자기보호 운동으로 반격한다.',
    author: '칼 폴라니',
    authorEn: 'Karl Polanyi',
    source: 'The Great Transformation',
    year: 1944,
  },
  {
    id: 'bengio-control',
    text: '충분한 안전장치 없이는 AI가 인간의 통제를 벗어날 위험이 있다.',
    author: '요슈아 벤지오',
    authorEn: 'Yoshua Bengio',
    source: 'AI Scientists: Safe and Useful AI?',
    year: 2023,
  },
  {
    id: 'russell-compatible',
    text: 'AI는 언제든 인간이 수정하거나 중단할 수 있어야 한다.',
    author: '스튜어트 러셀',
    authorEn: 'Stuart Russell',
    source: 'Human Compatible',
    year: 2019,
  },
  {
    id: 'suleyman-wave',
    text: '일단 널리 퍼진 기술을 다시 통제하기 어려울 수 있다.',
    author: '무스타파 술레이만',
    authorEn: 'Mustafa Suleyman',
    source: 'The Coming Wave',
    year: 2023,
  },
  {
    id: 'zuboff-surveillance',
    text: '인간의 경험이 데이터라는 원료로 전환되는 구조를 멈춰야 한다.',
    author: '쇼샤나 주보프',
    authorEn: 'Shoshana Zuboff',
    source: 'The Age of Surveillance Capitalism',
    year: 2019,
  },
  {
    id: 'crawford-power',
    text: 'AI는 지능이 아니라 권력의 시스템이다.',
    author: '케이트 크로포드',
    authorEn: 'Kate Crawford',
    source: 'Atlas of AI',
    year: 2021,
  },
  {
    id: 'sen-capability',
    text: "인간의 가치를 소득이 아니라 '할 수 있고 될 수 있는 것'으로 측정하라.",
    author: '아마르티아 센',
    authorEn: 'Amartya Sen',
    source: 'Development as Freedom',
    year: 1999,
  },
  {
    id: 'sandel-merit',
    text: '생산성이 아니라 공동선에 대한 기여가 가치의 기준이다.',
    author: '마이클 샌델',
    authorEn: 'Michael Sandel',
    source: 'The Tyranny of Merit',
    year: 2020,
  },
  {
    id: 'harari-deus',
    text: 'AI가 노동을 대체하면, 일자리를 잃은 사람들의 지위가 위협받는다.',
    author: '유발 하라리',
    authorEn: 'Yuval Harari',
    source: 'Homo Deus',
    year: 2017,
  },
  {
    id: 'eucken-order',
    text: '경제 질서와 정치 질서는 서로 맞물려 있다.',
    author: '발터 오이켄',
    authorEn: 'Walter Eucken',
    source: 'Grundsätze der Wirtschaftspolitik',
    year: 1952,
  },
  {
    id: 'piketty-capital',
    text: '자본 수익률이 경제 성장률을 초과하면 불평등은 구조적으로 심화된다.',
    author: '토마 피케티',
    authorEn: 'Thomas Piketty',
    source: 'Capital in the Twenty-First Century',
    year: 2014,
  },
  {
    id: 'hinton-control',
    text: 'AI가 인간보다 더 많이 알게 될 때, 통제력을 유지할 수 있는가?',
    author: '제프리 힌튼',
    authorEn: 'Geoffrey Hinton',
    source: 'Nobel Prize Lecture',
    year: 2024,
  },
]
