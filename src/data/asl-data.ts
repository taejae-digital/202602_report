export interface ASLLevel {
  level: string
  title: string
  capability: string
  safeguards: string
  bslAnalogy: string
  status: string
}

export const aslLevels: ASLLevel[] = [
  {
    level: 'ASL-1',
    title: '무의미한 위험',
    capability: '의미 있는 재앙적 위험을 제기하지 않는 시스템. 예: 2018년 수준의 초기 LLM, 체스 전용 AI.',
    safeguards: '특별한 안전 조치 불필요. 기본적 소프트웨어 보안 관행으로 충분.',
    bslAnalogy: 'BSL-1: 건강한 성인에게 질병을 일으키지 않는 병원체 → 기본 실험실 관행',
    status: '과거',
  },
  {
    level: 'ASL-2',
    title: '초기 위험 징후',
    capability: '위험한 역량의 초기 징후. CBRN 관련 지침 제공이 가능하나, 검색 엔진이나 교과서 수준을 넘지 않음.',
    safeguards: 'CBRN 요청 거부 훈련, 모델 가중치에 대한 기회주의적 탈취 방어.',
    bslAnalogy: 'BSL-2: 중등도 위험 병원체(HIV 등) → 제한 접근, 생물안전 캐비닛',
    status: 'Claude Sonnet 4',
  },
  {
    level: 'ASL-3',
    title: '실질적 위험 증가',
    capability: 'CBRN 무기 개발 위험을 실질적으로 증가시키거나, 초기 자율 행동 역량을 보이는 시스템.',
    safeguards: 'Constitutional Classifiers 기반 실시간 입출력 감시, 100+ 보안 통제, 이중 인증, 송출 대역폭 제어.',
    bslAnalogy: 'BSL-3: 공기 중 전파 병원체(SARS 등) → 이중 잠금, 배기 시스템, 방호복',
    status: 'Claude Opus 4.6 (현재)',
  },
  {
    level: 'ASL-4',
    title: '고도 위험 (연구 단계)',
    capability: '국가 안보 수준의 사이버/생물 위협, 자율 복제·종료 방지 가능, 독립적 AI 연구 수행.',
    safeguards: '기계적 해석 가능성, AI 통제(허니팟), 인센티브 분석 — 세 가지 안전 사례 초안 연구 중.',
    bslAnalogy: 'BSL-4: 치사율 높고 치료법 없는 병원체(에볼라) → 완전 격리, 양압 방호복',
    status: '미정의',
  },
  {
    level: 'ASL-5+',
    title: '극단적 위험 (개념적)',
    capability: '인간 수준 또는 그 이상의 자율적 AI. 현 시스템과 거리가 멀어 구체적 기준 미수립.',
    safeguards: '외부 감독 필수. 구체적 기준은 향후 수립 예정.',
    bslAnalogy: '해당 BSL 등급 없음 — 전례 없는 위험 수준',
    status: '개념적',
  },
]

export interface FrameworkComparison {
  name: string
  type: string
  approach: string
  enforcement: string
  scope: string
}

export const frameworkComparisons: FrameworkComparison[] = [
  {
    name: 'Anthropic RSP/ASL',
    type: '기업 자발적 정책',
    approach: '역량 기반 등급 (ASL-1~5+)',
    enforcement: '자율 규제 (구속력 없음)',
    scope: '프론티어 AI 모델',
  },
  {
    name: 'OpenAI Preparedness',
    type: '기업 자발적 정책',
    approach: 'Low/Medium/High/Critical 등급',
    enforcement: '자율 규제 (구속력 없음)',
    scope: '프론티어 AI 모델',
  },
  {
    name: 'EU AI Act',
    type: '법적 구속력 있는 규제',
    approach: '사용 맥락 기반 4단계 분류',
    enforcement: '벌금 (매출의 최대 7%)',
    scope: 'EU 내 배포/사용 모든 AI',
  },
  {
    name: 'NIST AI RMF',
    type: '정부 가이드라인',
    approach: '4대 기능: 거버넌스·매핑·측정·관리',
    enforcement: '자발적 가이드라인',
    scope: '모든 AI 시스템',
  },
]

export const policyImplications = [
  {
    area: '위험 분류',
    implication: 'AI 위험을 역량 기준으로 분류하는 체계가 현실적으로 가능하며, BSL과 같은 기존 위험 관리 체계에서 유비를 도출할 수 있음',
  },
  {
    area: '동의와 참여',
    implication: '현행 ASL은 기업 내부 결정이며, 시민 참여 메커니즘이 부재 → 사회계약적 정당성 결여',
  },
  {
    area: '집행 가능성',
    implication: '자발적 약속의 집행력 한계 → 법적 구속력 있는 규제(EU AI Act 방식)의 필요성',
  },
  {
    area: '적응적 거버넌스',
    implication: '고정된 규제가 아닌 역량 변화에 따라 진화하는 프레임워크의 필요성을 입증',
  },
  {
    area: '국제적 조율',
    implication: '기업/국가별 상이한 프레임워크 간 호환성 문제 → AI 거버넌스의 국제 사회계약 필요',
  },
]

export const aslSources = [
  { label: 'Anthropic', desc: 'Responsible Scaling Policy v2.2 (2025)' },
  { label: 'Anthropic', desc: 'Activating ASL-3 Protections (2025)' },
  { label: 'Anthropic', desc: 'Claude Opus 4.6 Sabotage Risk Report (2026)' },
  { label: 'FAS', desc: 'Can Preparedness Frameworks Pull Their Weight? (2025)' },
  { label: 'EU', desc: 'AI Act (2024)' },
]
