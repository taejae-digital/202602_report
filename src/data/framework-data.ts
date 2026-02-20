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

export interface ResearchArea {
  id: string
  priority: 'critical' | 'important'
  priorityLabel: string
  weight: string
  title: string
  topic: string
  direction: string
  researchers: string[]
  lead?: string
}

export const researchAreas: ResearchArea[] = [
  {
    id: 'human-dignity',
    priority: 'critical',
    priorityLabel: '5% 결정적',
    weight: '인간 위협',
    title: '인간 존엄의 위기',
    topic: '인간 = 삶 그 자체로 가치 있는, 목적을 세우는 존재',
    direction: '디지털 시대 인간 위협과 권리 이론화',
    researchers: ['sandel', 'nussbaum', 'karatani', 'han'],
    lead: '김수연',
  },
  {
    id: 'ai-safety',
    priority: 'critical',
    priorityLabel: '5% 결정적',
    weight: '안전 원칙',
    title: 'AI 자율살상 위협',
    topic: 'AI 자율살상·통제상실로부터 보호받을 생명권',
    direction: 'AI 무기 현황 → 생명권 조항 도출',
    researchers: ['bengio', 'bostrom', 'russell', 'hinton'],
    lead: '윤준영',
  },
  {
    id: 'tech-control',
    priority: 'critical',
    priorityLabel: '5% 결정적',
    weight: '통제 원칙',
    title: 'AI와 빅테크 통제',
    topic: 'AI 결정을 이해·번복·따라잡 수 있는 기술 통제권',
    direction: '알고리즘 불투명성 분석 → 기술 통제권 정립',
    researchers: ['zuboff', 'crawford', 'russell'],
    lead: '이규환',
  },
  {
    id: 'distribution',
    priority: 'important',
    priorityLabel: '15% 중요',
    weight: '경제 질서',
    title: '분배·노동·공동체 붕괴',
    topic: '목적 기여 기반 분배 (돌봄·양육·데이터 포함)',
    direction: '4계급·7단계 공동체 분석과 분배 대안 설계',
    researchers: ['standing', 'piketty', 'saito', 'federici'],
    lead: '김수연',
  },
  {
    id: 'international',
    priority: 'important',
    priorityLabel: '15% 중요',
    weight: '국제 질서',
    title: '미중 패권 경쟁',
    topic: '미중 협력 기반 글로벌 AI 안전 거버넌스',
    direction: '미중 현황 → 국제 협력 레짐 설계',
    researchers: ['suleyman', 'acemoglu', 'graylin'],
    lead: '윤준영',
  },
  {
    id: 'governance',
    priority: 'important',
    priorityLabel: '15% 중요',
    weight: '거버넌스',
    title: '빅테크 통제',
    topic: '공공 AI 인프라 + 기술 권력 분립',
    direction: '규제 한계 → 공공 AI 인프라 모델',
    researchers: ['suleyman', 'mazzucato', 'yuk-hui'],
    lead: '이규환',
  },
]
