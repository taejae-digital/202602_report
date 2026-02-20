export interface FrameworkPhase {
  id: string
  phase: string
  phaseKr: string
  phaseClass: string
  industrial: string
  digital: string
  status?: string
}

export const frameworkPhases: FrameworkPhase[] = [
  {
    id: 'irruption',
    phase: 'Irruption',
    phaseKr: '기술 폭발',
    phaseClass: 'phase-irruption',
    industrial: '기계가 신체 노동을 대체. 분업화를 통해 생산력이 폭발하고, 기업이라는 새로운 행위자가 등장.',
    digital: 'AI가 인지 노동까지 대체. 자율화의 범위가 폭발하고, AI 에이전트라는 새로운 행위자가 등장.',
  },
  {
    id: 'frenzy',
    phase: 'Frenzy',
    phaseKr: '과열',
    phaseClass: 'phase-frenzy',
    industrial: '기업에 대한 제도 미비. 투기 자본, 양극화, 착취가 심화되나 책임 귀속 불가. 노동 착취·독점이 방치되고, 사회적 긴장이 누적되어 정치적 격변의 토양이 됨.',
    digital: 'AI에 대한 제도 미비. 플랫폼 독점, AI 투자 광풍, 미중 패권 경쟁이 벌어지나 책임 귀속 불가.',
    status: '현재 진행 중',
  },
  {
    id: 'turning',
    phase: 'Turning Point',
    phaseKr: '전환점',
    phaseClass: 'phase-turning',
    industrial: '경로 A: 격변 후 황금기 (러다이트, 프랑스 혁명, 세계대전)\n경로 B: 선제적 설계로 비용 절감 (영국 회사법 입법, 미국 진보 시대, 스웨덴 살트셰바덴 협약)',
    digital: '질서를 선제적으로 설계하여 격변 없이 황금기로 직행해야.\nAI = 인간 통제를 벗어날 수 있는 최초의 기술. → 선제적 설계가 필요.',
  },
  {
    id: 'golden',
    phase: 'Golden Age',
    phaseKr: '황금기',
    phaseClass: 'phase-golden',
    industrial: '주체를 정의하고, 관계를 규율하고, 질서를 설계했을 때 — 황금기.',
    digital: '전자인을 만들고, 관계를 규율하고, 질서의 조건을 설계했을 때 — AI와 인간이 공존하는 새로운 사회계약. 기술 혜택이 사회 전체로 확산.',
  },
]

export interface ResearchStage {
  id: string
  num: string
  title: string
  subtitle: string
  question: string
  direction: string
  existing: string
  researchers: string[]
  isAdaptive?: boolean
}

export const researchStages: ResearchStage[] = [
  {
    id: 'subject',
    num: '❶',
    title: '주체 정의',
    subtitle: '전자인이라는 법적 범주',
    question: 'AI 에이전트가 스스로 판단하고 행동할 때, 그 행위를 누구에게 귀속시킬 것인가?',
    direction: '전자인을 단일한 지위가 아니라 스펙트럼으로 설계한다 — 도구 → 대리인 → 준자율 → 자율. 각 단계에서 자율성의 범위, 책임의 귀속, 인간 개입의 수준이 달라진다. 러셀의 "번복 가능성" 원칙이 스펙트럼 전체를 관통하는 핵심 제약이 된다.',
    existing: 'EU 전자인격(2017, 후퇴) · 영미 대리인법 프레임 · AI 정렬(alignment) 접근 — 8년간 합의된 프레임이 없는 상태.',
    researchers: ['sandel', 'nussbaum', 'karatani', 'han', 'bengio', 'bostrom', 'russell', 'zuboff', 'crawford', 'hinton'],
  },
  {
    id: 'relation',
    num: '❷',
    title: '관계 정의',
    subtitle: '인간-AI 사이의 권리와 책임',
    question: '자연인·법인·전자인이라는 세 당사자 사이의 권리·의무·책임을 어떻게 규율할 것인가?',
    direction: '산업별 파편 논의를 관통하는 일반 책임 구조의 초안을 설계한다. 네 영역: (1) 데이터 소유권, (2) 인간-AI 책임 배분, (3) 알고리즘 권력의 규율, (4) 디지털 시민권.',
    existing: '자율주행(SAE 6단계) · 군사 AI(LAWS 규제) · 금융(알고리즘 트레이딩) 등 산업별로 파편화. 산업을 관통하는 일반 구조는 없음.',
    researchers: ['lanier', 'crawford', 'bengio', 'nussbaum', 'floridi', 'russell'],
  },
  {
    id: 'order',
    num: '❸',
    title: '질서 설계',
    subtitle: '네 경제 주체의 역할 재정의',
    question: '전자인·가계·기업·정부 — 네 경제 주체의 역할을 어떻게 새로 정의할 것인가?',
    direction: '분배 4후보(기본소득 · 데이터 배당 · 공공 AI 인프라 · 역량 접근법)를 배타적 대안이 아닌 상호보완적 요소로 결합한다. 시민 참여가 내장된 거버넌스 구조를 설계한다.',
    existing: 'EU AI Act(하향식) · 미국(자율 규제) · 중국(국가 통제) — 세 흐름 모두 시민의 실질적 참여 구조가 없음. 글로벌 구속력 있는 레짐도 없음.',
    researchers: ['standing', 'piketty', 'saito', 'federici', 'suleyman', 'acemoglu', 'graylin', 'mazzucato', 'yuk-hui', 'van-parijs', 'sen', 'tang', 'sandel', 'lanier', 'nussbaum'],
    isAdaptive: true,
  },
]
