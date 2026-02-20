export interface DeclarationArticle {
  num: number
  title: string
  text: string
  basis: string
  researchers: string[]
}

export const declarationPreamble = `200년 전, 산업혁명은 분업을 통해 인류에게 전례 없는 번영을 가져왔다. 역할을 나누고 전문화함으로써 생산성이 비약적으로 증가했고, 대부분의 사람들이 경제에 기여할 자리를 찾을 수 있었다.

오늘날, 에이전트화라는 새로운 전환이 시작되었다. 인공지능이 스스로 판단하고 실행하는 시대, 분업이 인간에게 부여했던 역할의 상당 부분을 기계가 대신하게 되었다.

이 전환은 인류에게 기회이자 위험이다. 산업화 시대의 논리 — 기여하는 자만이 가치 있다면, 수많은 사람들이 존엄을 잃을 위험에 처한다.

이 전환을 기회로 만들기 위해, 건강하고 안전한 미래를 위한 원칙을 선언한다.`

export const declarationArticles: DeclarationArticle[] = [
  {
    num: 1,
    title: '존엄',
    text: '모든 인간은 존재 자체로 존엄하다. 존엄의 근거는 노동이 아닌 생명이다.',
    basis: '에이전트화 → 노동 불필요 → "쓸모 = 가치" 논리 유지 시 대다수 인간의 존엄 상실',
    researchers: ['harari', 'sandel', 'nussbaum'],
  },
  {
    num: 2,
    title: '생명',
    text: '모든 인간은 AI의 자율살상과 통제상실로부터 보호받을 권리가 있다.',
    basis: 'AI가 0.01초 만에 생사 결정 가능 → 인간 판단 없는 살상은 실존적 위협',
    researchers: ['bengio', 'hinton', 'russell'],
  },
  {
    num: 3,
    title: '참여',
    text: '모든 인간은 목적 설정에 참여할 권리가 있다. 누구도 이를 독점할 수 없다.',
    basis: '소수의 빅테크가 80억 인구의 일상 설계 → 새로운 전제정',
    researchers: ['acemoglu', 'zuboff'],
  },
  {
    num: 4,
    title: '기여',
    text: '모든 인간은 돌봄, 양육, 데이터 생산 등 모든 기여를 인정받을 권리가 있다.',
    basis: '보이지 않는 기여(AI를 훈련 → 노동만 가치로 인정하면 분배 정당성 상실',
    researchers: ['standing', 'lanier'],
  },
  {
    num: 5,
    title: '통제',
    text: '모든 인간은 AI에게 설명을 요구하고, 번복하고, 인간의 속도를 요구할 권리가 있다.',
    basis: '알고리즘 불투명 + 에이전트 속도 → 인간의 심의·민주주의 무력화',
    researchers: ['russell', 'crawford'],
  },
  {
    num: 6,
    title: '심의',
    text: '공동의 목적은 참여와 숙의로 결정되며, 언제든 번복될 수 있다.',
    basis: '대의제 한계(느림, 복잡성) → AI 보조로 직접 판단 가능해짐',
    researchers: ['tang', 'suleyman'],
  },
]
