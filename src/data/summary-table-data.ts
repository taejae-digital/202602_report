export const summaryHeaders = [
  '페레즈 사이클',
  '산업화',
  '디지털 전환',
  '학계 현황 & 연구 과제',
]

export interface TableRow {
  label?: string
  industrial: string
  digital: string
  academic: string
}

export interface TableSection {
  phase: string
  phaseEn: string
  highlight?: 'current' | 'turning'
  rows: TableRow[]
}

export const tableSections: TableSection[] = [
  {
    phase: '기술 폭발',
    phaseEn: 'Irruption',
    rows: [
      {
        industrial: '기계가 신체 노동을 대체. 분업화를 통해 생산력이 폭발하고, 기업이라는 새로운 행위자가 등장.',
        digital: 'AI가 인지 노동까지 대체. 자율화의 범위가 폭발하고, AI 에이전트라는 새로운 행위자가 등장.',
        academic: '',
      },
    ],
  },
  {
    phase: '과열',
    phaseEn: 'Frenzy',
    highlight: 'current',
    rows: [
      {
        industrial: '기업에 대한 제도 미비. 투기 자본, 양극화, 착취가 심화되나 책임 귀속 불가. 노동 착취·독점이 방치되고, 사회적 긴장이 누적되어 정치적 격변의 토양이 됨.',
        digital: 'AI에 대한 제도 미비. 플랫폼 독점, AI 투자 광풍, 미중 패권 경쟁이 벌어지나 책임 귀속 불가.\n⬤ **현재 진행 중.**',
        academic: '**진단 풍부** (Zuboff, Piketty, Harari, Hinton, Suleyman).\n**설계 부재.**',
      },
    ],
  },
  {
    phase: '전환점',
    phaseEn: 'Turning Point',
    highlight: 'turning',
    rows: [
      {
        label: '역사적 교훈',
        industrial: '경로 A: **격변 후 황금기**\n• 1차 대파동: 러다이트, 프랑스 혁명\n• 3차 대파동: 노동착취·독점 → 1차 세계대전\n• 4차 대파동: 대공황 + 2차 세계대전\n\n경로 B: **선제적 설계로 비용 절감**\n• 영국 회사법 입법 (1844~56)\n• 미국 진보 시대 (셔먼법, 연준, 클레이턴법)\n• 스웨덴 살트셰바덴 협약 (1938)',
        digital: '**AI 시대: 경로 B를 체계적으로 확장**\n\n질서를 선제적으로 설계하여 격변 없이 황금기로 직행해야\n\nAI = 인간 통제를 벗어날 수 있는 **최초의 기술**.\n→ 선제적 설계가 필요.',
        academic: '**목표: 경로를 유연하게 설계한다**\n\n→ 질서 자체가 아니라\n**질서가 작동할 조건**을 설계.',
      },
      {
        label: '❶ 주체 정의\n(5%)',
        industrial: '**시장이 먼저 만듦:**\n기업·가계가 시장에서 자연 분화.\n\n**법이 뒤따름:**\n법인 = 새로운 법적 범주 (회사법 1844~56)',
        digital: '**사전에 설계:**\n전자인 = 제3의 법적 범주 (자연인·법인에 이어)\n\n도구 → 대리인 → 준자율 → 자율\n스펙트럼으로 설계',
        academic: 'EU 2017 전자인 결의 → 학계 반대 → Liability Directive 철회.\n8년간 프레임 없음.\n\n→ **전자인 법적 지위 스펙트럼 설계**',
      },
      {
        label: '❷ 관계 정의\n(5%)',
        industrial: '**시장이 먼저 만듦:**\n가격과 계약으로 관계 자생적 형성.\n\n**법이 뒤따름:**\n재산권, 노동법, 시민적 권리, 삼권분립',
        digital: '**사전에 설계:**\n데이터 소유권 / 인간-AI 책임 배분 /\n알고리즘 권력 규율 / 디지털 시민권\n\n산업별 파편을 관통하는 일반 구조가 필요',
        academic: '자율주행(SAE), 군사AI(LAWS), 금융 등 산업별 파편 논의.\n일반적 관계 규정 없음.\n\n→ **산업 관통 일반 책임 구조 초안**',
      },
      {
        label: '❸ 질서 설계\n(적응적 15%)',
        industrial: '**세 경제 주체 확립:**\n법인→기업, 자연인→가계, 국가→정부\n\n**거버넌스:** 질서의 문제를 관리하는\n사후적 구조 (의회, 단체교섭, 복지국가)',
        digital: '**질서 자체가 아니라 질서의 조건 설계:**\n\n• 전자인: 경제 행위의 범위\n• 가계: 새 분배 경로\n• 기업: AI에 대한 책임 구조\n• 정부: 글로벌 거버넌스 확장',
        academic: '새로운 분배 질서 후보:\n① 기본소득 (반 파레이스)\n② 데이터 배당 (라니어·샌델)\n③ 공공 AI 인프라 (마추카토)\n④ 역량 접근 (센·누스바움)\n→ 각각 발전, 통합 설계 없음.\n\n거버넌스: EU AI Act 등. 전부 하향식. 시민 참여 없음.\n→ **질서 설계**',
      },
      {
        label: '실무\n(80% 파생)',
        industrial: '회사법, 환경법, 산업별 규제, 조세 체계',
        digital: '세부 입법, 파일럿 사업, 산업별 적용, 적응적 조정',
        academic: '❶❷❸에서 파생. 원칙 확립 후 구현.',
      },
    ],
  },
  {
    phase: '황금기',
    phaseEn: 'Golden Age',
    rows: [
      {
        industrial: '경로 A: 격변 후 도달 (전후 황금기 1945~75)\n\n경로 B: 선제적 설계로 도달 (북유럽, 미국, 영국 모델)\n\n**공통:** 주체를 정의하고, 관계를 규율하고,\n질서를 설계했을 때 — 황금기.',
        digital: '**경로 B의 체계적 확장.**\n\n전자인을 만들고, 관계를 규율하고,\n질서의 조건을 설계했을 때 —\nAI와 인간이 공존하는 **새로운 사회계약.**\n기술 혜택이 사회 전체로 확산.',
        academic: '❶❷❸ 통합 보고서\n\n국제 자문단 (7~8월)\n→ 단행본 (9~10월)\n→ 서울 컨퍼런스 (11~12월)',
      },
    ],
  },
]
