export interface RealWorldExample {
  afterSection: string
  title: string
  content: string
  url?: string
}

export const realWorldExamples: RealWorldExample[] = [
  {
    afterSection: 'sec-1',
    title: 'AI 에이전트란 무엇인가?',
    content:
      'ChatGPT에게 "내일 부산 출장 일정 잡아줘"라고 말하면, AI가 스스로 항공편을 검색하고, 호텔을 예약하고, 캘린더에 일정을 넣는다 — 이것이 AI 에이전트다. 사람이 하나하나 지시하지 않아도 스스로 판단하고 실행하는 AI 프로그램이다. 2025년부터 구글, 마이크로소프트, 애플 모두 자사 AI를 "에이전트"로 진화시키고 있다. 자율주행차도 AI 에이전트의 한 형태다 — 운전자가 핸들을 잡지 않아도 스스로 도로 상황을 판단하고 운전한다.',
  },
  {
    afterSection: 'sec-1-3',
    title: '지금 실제로 무슨 일이 벌어지고 있나?',
    content:
      '2025년 기준, 전 세계 기업의 75% 이상이 AI를 도입했거나 도입 중이다. 은행 창구 대신 AI 챗봇이, 번역가 대신 AI 번역이, 콜센터 상담사 대신 AI 음성비서가 일한다. 한국에서도 카카오·네이버·삼성이 AI 에이전트를 출시하고 있다. 휴머노이드 로봇 기업 Figure AI는 BMW 공장에 로봇을 배치했고, 테슬라의 옵티머스는 물류 작업을 시작했다. Goldman Sachs 추산에 따르면 AI는 전 세계 3억 개 일자리에 영향을 미칠 수 있다.',
  },
  {
    afterSection: 'sec-3-1',
    title: 'AI가 "스스로 판단한다"는 것은?',
    content:
      '산업 시대의 기계는 도구였다. 선풍기는 버튼을 누르면 돌고, 끄면 멈춘다. AI는 다르다. AI 주식 트레이딩 시스템은 0.001초 만에 수십억 원어치 매매를 결정한다 — 사람이 "잠깐 멈춰"라고 말할 틈이 없다. AI 채용 시스템은 이력서를 읽고 합격·불합격을 스스로 결정한다 — 왜 떨어졌는지 지원자에게 설명하지 않는다. AI 무기 드론은 목표물을 스스로 식별하고 공격할 수 있다 — 사람이 발사 버튼을 누르지 않아도.',
  },
  {
    afterSection: 'sec-3-2',
    title: '클라르나 AI 상담 — 대체와 품질의 딜레마',
    content:
      '2024년, 스웨덴 핀테크 클라르나의 AI 에이전트가 한 달에 230만 건의 고객 상담을 처리했다. 정규직 상담원 700명분의 업무량이었다. 그러나 6개월 후 고객 만족도가 급락했고, CEO는 "비용 절감에 집중하느라 품질을 놓쳤다"고 인정하며 다시 인력을 채용하기 시작했다. 클라르나의 궤적 — 대체, 품질 하락, 혼합 모델 — 은 수많은 기업이 따라갈 경로의 초기 버전이다.',
    url: 'https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/',
  },
  {
    afterSection: 'sec-4-2',
    title: '전자인이 왜 필요한가? — 실생활 예시',
    content:
      'AI 에이전트가 온라인에서 계약을 체결한다고 생각해보자. AI 비서가 사용자의 지시를 받아 쇼핑몰에서 물건을 주문했는데, 잘못된 물건이 왔다. 누구의 책임인가? AI 개발사? 쇼핑몰? 사용자? 현재로서는 답이 불명확하다. 또 다른 예: AI가 작성한 보고서가 잘못된 정보를 담고 있어서 투자 손실이 발생했다. AI에게 손해배상을 청구할 수 있는가? 법적으로 AI는 아직 "아무것도 아니다". 산업 시대에 회사에 법인격을 부여한 것처럼, AI에게도 어떤 법적 범주가 필요한 이유다.',
  },
  {
    afterSection: 'sec-4-3',
    title: '우리의 데이터는 어떻게 쓰이고 있나?',
    content:
      '여러분이 네이버에서 검색할 때, 유튜브 영상을 볼 때, 카카오톡으로 대화할 때, 쿠팡에서 물건을 살 때 — 그 모든 기록이 수집된다. 이 데이터로 AI가 훈련되고, 빅테크 기업은 수조 원의 이익을 올린다. 하지만 데이터를 제공한 여러분에게는 한 푼도 돌아오지 않는다. 알고리즘은 여러분이 무엇을 보고, 무엇을 사고, 누구를 만날지까지 결정한다 — 넷플릭스가 추천하는 영화, 유튜브가 띄우는 다음 영상, 인스타그램이 보여주는 광고가 모두 알고리즘의 결정이다.',
  },
  {
    afterSection: 'sec-4-4',
    title: 'AI가 노동을 대체하면 우리 삶은 어떻게 되나?',
    content:
      '이미 일어나고 있는 변화: 미국 로펌들은 AI로 계약서 검토 시간을 80% 줄였다. 통번역사의 업무량이 급감하고 있다. 언론사들은 AI가 작성한 기사를 싣고 있다. 앞으로 일어날 변화: 자율주행이 보편화되면 택시·버스·트럭 운전사의 일자리가 줄어든다. AI 에이전트가 발전하면 사무직·회계·행정 업무의 상당 부분이 자동화된다. 휴머노이드 로봇이 공장·물류·요식업에 투입되면 육체 노동도 대체된다. 일자리를 잃은 사람들이 새 일자리를 찾지 못하면? 이것이 "분배 질서를 미리 설계해야 하는" 이유다.',
  },
  {
    afterSection: 'sec-4-1',
    title: '웨이모 로보택시 — 자율주행의 역설',
    content:
      '웨이모 로보택시는 주당 40만 건 이상의 유료 운행을 수행하며 기업 가치 1,260억 달러를 기록했다. 그러나 자율주행차의 문이 열린 채 방치되면, 긱 노동자가 달려와 문 하나를 닫아주고 24달러를 받는다. 기술이 인간 노동을 대체하는 동시에 새로운 형태의 마이크로태스크를 만들어내는 역설적 구조를 보여준다.',
    url: 'https://waymo.com/blog/2024/10/investing-to-bring-the-waymo-driver-to-more-riders',
  },
  {
    afterSection: 'sec-4-5',
    title: '블랙프라이데이 AI 트래픽 — 쇼핑의 주체가 바뀌다',
    content:
      '2025년 블랙프라이데이, 소매 사이트를 방문한 AI 기반 트래픽이 전년 대비 805% 증가했다(Adobe Analytics). Adobe는 HTTP User-Agent 헤더(GPTBot, ChatGPT-User 등 AI 크롤러 고유 식별자), AI 플랫폼 도메인이 찍히는 Referrer 헤더, 그리고 페이지 간 이동 속도가 비정상적으로 빠른 행동 패턴 — 세 가지 신호를 조합해 AI 트래픽을 식별한다. 쇼핑하러 온 것은 사람이 아니라 에이전트였다. 구매 여정의 첫 단추부터 AI가 개입하기 시작하면서, 소비의 주체 자체가 변화하고 있다.',
    url: 'https://business.adobe.com/resources/digital-economy-index.html',
  },
  {
    afterSection: 'sec-4-5',
    title: '구글 Buy for me — AI가 직접 구매를 실행한다',
    content:
      '구글은 2025년 검색과 AI Mode에 "Buy for me" 기능을 출시했다. 가격 추적 조건이 충족되면 AI 에이전트가 판매자 사이트에 접속해 직접 구매를 실행한다. 아마존, OpenAI, 퍼플렉시티도 동일한 방향으로 움직이고 있다. "AI가 대신 사준다"는 동일한 방향으로 빅테크가 동시에 달리고 있다는 것 자체가 변화의 속도를 보여준다.',
    url: 'https://blog.google/products/shopping/google-shopping-ai-mode-virtual-try-on-update/',
  },
  {
    afterSection: 'sec-5-1',
    title: '에이전트 프로토콜 경쟁 — 경제 인프라의 표준 전쟁',
    content:
      '앤트로픽의 MCP, 구글의 A2A(Agent-to-Agent)와 AP2(Agent Payments Protocol), ACP(Agentic Commerce Protocol) 등 에이전트 간 통신 표준 경쟁이 시작됐다. 인터넷 초기 TCP/IP가 정보의 흐름을 결정했듯, 에이전트 프로토콜이 거래의 흐름을 결정할 것이다. 누가 이 표준을 장악하느냐에 따라 수수료, 데이터 소유권, 시장 접근권이 달라진다.',
    url: 'https://a2a-protocol.org/latest/',
  },
  {
    afterSection: 'sec-3-2',
    title: '토요타 AI 증강 — 노동자가 직접 ML 모델을 개발',
    content:
      '토요타는 구글 클라우드의 AI 인프라를 활용해 공장 노동자가 직접 머신러닝 모델을 개발하고 배포할 수 있는 플랫폼을 구축했다. 연간 1만 시간 이상의 작업 시간이 절감됐다. AI가 노동자를 대체한 것이 아니라, 노동자에게 새로운 도구를 준 것이다. 클라르나의 "대체" 사례와 대비되는 "증강"의 길을 보여준다.',
    url: 'https://cloud.google.com/blog/topics/manufacturing/toyota-vertex-ai',
  },
]
