export interface DemocraticExperiment {
  id: string
  name: string
  year: string
  participants: string
  method: string
  outcome: string
  binding: boolean
  highlight?: boolean
}

export const experiments: DemocraticExperiment[] = [
  {
    id: 'vtaiwan',
    name: 'vTaiwan (대만)',
    year: '2014~현재',
    participants: '1,737명+ (우버 규제 사례)',
    method: 'Pol.is 기반 온·오프라인 숙의. 시민이 의견을 제출하고 투표하면 PCA 알고리즘이 합의점을 자동 도출.',
    outcome: '26개 이상의 디지털 정책 처리, 정부가 합의안의 80% 이상을 입법화. 우버 규제에서 7개 합의안 도출, 95% 동의율.',
    binding: true,
    highlight: true,
  },
  {
    id: 'ccai',
    name: 'Collective Constitutional AI (Anthropic)',
    year: '2023',
    participants: '1,094명 (미국 대표 표본)',
    method: 'Pol.is 플랫폼에서 시민이 AI의 가치관(헌법)에 직접 투표. 38,252표, 275개 공개 성명.',
    outcome: '시민 헌법으로 훈련된 모델은 9개 사회적 차원 모두에서 편향이 더 낮았고, 성능은 동일. 장애인 접근성과 객관성을 더 강조.',
    binding: false,
  },
  {
    id: 'habermas',
    name: '하버마스 머신 (Google DeepMind)',
    year: '2024',
    participants: '5,734명',
    method: 'AI 중재자가 참여자 의견과 비판을 학습해 합의안을 생성. Science지 발표.',
    outcome: 'AI가 생성한 합의안이 인간 중재자의 합의안보다 56% 더 선호됨. 더 정보적이고 명확하며 편향이 적다고 평가.',
    binding: false,
  },
  {
    id: 'openai',
    name: 'Democratic Inputs to AI (OpenAI)',
    year: '2023',
    participants: '10개 팀, 팀당 500명+',
    method: '각 팀이 고유한 민주적 입력 방법론을 개발. $100,000씩 지원.',
    outcome: 'Collective Alignment 팀 구성. 그러나 GPT 정책에 대한 확인된 직접적 영향은 없음.',
    binding: false,
  },
  {
    id: 'meta',
    name: '커뮤니티 포럼 (Meta)',
    year: '2023~24',
    participants: '1,500명+ (브라질, 독일, 스페인, 미국)',
    method: 'Stanford 숙의민주주의 연구소 및 BIT과 협력. 교육→전문가 Q&A→소그룹 숙의→AI 중재.',
    outcome: '숙의 과정에서 의견 변화 최대 20.5%. 그러나 구체적 정책 변화 문서화 없음.',
    binding: false,
  },
  {
    id: 'taiwan-ai',
    name: 'AI 정렬 의회 (대만 디지털부)',
    year: '2023',
    participants: '수백 명 (타이베이·타이난)',
    method: 'Collective Intelligence Project과 협력. Pol.is 온라인 + 대면 워크숍.',
    outcome: 'AI 생성 콘텐츠 자동 탐지, 고유 익명 디지털 ID, 시민 감독 팩트체킹 등 정책 로드맵 도출.',
    binding: false,
  },
]

export const keyInsight = '기술 거버넌스에서 대규모 시민 숙의가 구속력 있는 정책 결과로 이어진 사례는 vTaiwan이 유일하다. 나머지는 모두 자문적(advisory) 수준에 머물러 있다. AI가 숙의를 확장할 수 있다는 가능성(하버마스 머신, Pol.is)은 입증되었으나, 그 결과를 구속력 있는 거버넌스로 연결하는 제도적 경로가 과제다.'

export const democraticSources = [
  { label: 'Huang et al.', desc: 'Collective Constitutional AI (ACM FAccT 2024)' },
  { label: 'Tessler et al.', desc: 'AI can help humans find common ground (Science, 2024)' },
  { label: 'Landemore', desc: 'Can AI bring deliberation to the masses (OUP, 2024)' },
  { label: 'vTaiwan', desc: 'Crowdlaw Case Study (congress.crowd.law)' },
  { label: 'Small et al.', desc: 'Polis: Scaling Deliberation (RECERCA, 2021)' },
]
