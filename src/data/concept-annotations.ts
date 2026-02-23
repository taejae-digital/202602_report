export interface ConceptAnnotation {
  afterSection: string
  term: string
  content: string
  source?: string
}

export const conceptAnnotations: ConceptAnnotation[] = [
  // ── sec-1-1 ──
  {
    afterSection: 'sec-1-1',
    term: '페레즈의 기술 혁명 주기론',
    content:
      '카를로타 페레즈(Carlota Perez)는 베네수엘라 출신 경제학자로, 1770년대 이후 다섯 차례의 기술 혁명 — (1) 산업혁명, (2) 증기·철도, (3) 철강·전기, (4) 석유·자동차, (5) 정보·통신 — 이 모두 동일한 4단계 주기를 따른다고 분석했다: 폭발(irruption) → 광란(frenzy) → 전환점(turning point) → 황금기(golden age). 전환점에서 제도 재편이 이루어지면 황금기에 도달하고, 실패하면 위기가 장기화된다. 2002년 저서 《Technological Revolutions and Financial Capital》에서 체계화했다.',
    source: 'https://en.wikipedia.org/wiki/Technological_Revolutions_and_Financial_Capital',
  },

  // ── sec-1-2 ──
  {
    afterSection: 'sec-1-2',
    term: '러다이트 운동 (1811-16)',
    content:
      '영국 중부·북부의 섬유 노동자들이 자동 방직기 도입에 반발하여 기계를 파괴한 운동. "네드 러드(Ned Ludd)"라는 전설적 인물의 이름을 빌렸다. 단순한 기계 혐오가 아니라, 숙련 노동의 경제적 기반이 붕괴되는 것에 대한 조직적 저항이었다. 영국 정부는 군대를 동원해 진압했고, 기계파괴법(Frame Breaking Act, 1812)으로 기계 파괴를 사형에 해당하는 범죄로 규정했다.',
    source: 'https://en.wikipedia.org/wiki/Luddite',
  },
  {
    afterSection: 'sec-1-2',
    term: '영국 회사법(1844-56)과 유한책임',
    content:
      '1844년 합자회사법(Joint Stock Companies Act)으로 회사 등록이 왕실 칙허(Royal Charter) 없이 가능해졌고, 1855년 유한책임법(Limited Liability Act), 1856년 합자회사법 개정으로 유한책임이 일반화되었다. 이전에는 기업 설립에 왕실이나 의회의 개별 허가가 필요했고, 주주가 무한 책임을 졌다. 유한책임 — 투자한 만큼만 잃을 수 있다 — 이 도입되면서 소규모 투자자의 참여가 가능해졌고, 현대적 주식회사의 기초가 놓였다.',
    source: 'https://en.wikipedia.org/wiki/Joint_Stock_Companies_Act_1856',
  },
  {
    afterSection: 'sec-1-2',
    term: '미국 진보 시대 개혁 (1890-1914)',
    content:
      '셔먼법(Sherman Antitrust Act, 1890)은 독점과 카르텔을 금지한 미국 최초의 반독점법이다. 이 법으로 스탠더드 오일(1911)과 아메리칸 토바코(1911)가 해체되었다. 연방준비제도(Federal Reserve, 1913)는 1907년 금융 공황 이후 설립된 미국의 중앙은행 시스템으로, 통화 공급과 금융 안정을 관리한다. 클레이턴법(Clayton Act, 1914)은 셔먼법의 허점을 보완하여 가격 차별, 배타적 거래, 반경쟁적 인수합병을 금지했다. 세 법 모두 1차 세계대전 이전에 선제적으로 제정되었다는 점에서 "위기 후 대응"이 아닌 "선제적 설계"의 사례다.',
    source: 'https://en.wikipedia.org/wiki/Progressive_Era',
  },
  {
    afterSection: 'sec-1-2',
    term: '살트셰바덴 협약과 렌-마이드너 모델',
    content:
      '살트셰바덴 협약(Saltsjöbaden Agreement, 1938)은 스웨덴 경영자총연합(SAF)과 노동조합총연맹(LO)이 스톡홀름 근교 살트셰바덴에서 체결한 노사 대타협이다. 전쟁이나 혁명 없이 자발적 협상으로 이루어졌으며, 파업 절차·단체교섭 규칙·분쟁 해결 메커니즘을 합의했다. 이후 LO 소속 경제학자 예스타 렌과 루돌프 마이드너가 설계한 렌-마이드너 모델 — 연대임금정책(생산성과 무관하게 동일 노동 동일 임금)과 적극적 노동시장정책의 결합 — 이 이 협약 위에서 작동하며 북유럽 복지국가의 경제적 토대가 되었다.',
    source: 'https://en.wikipedia.org/wiki/Saltsj%C3%B6baden_Agreement',
  },
  {
    afterSection: 'sec-1-2',
    term: '전후 황금기와 브레튼우즈 체제',
    content:
      '전후 황금기(1945~1973)는 서방 선진국이 유례없는 경제 성장, 낮은 실업률, 상대적 평등을 동시에 달성한 시기다. 이 황금기의 국제적 기반이 브레튼우즈 체제(1944)로, 44개국이 미국 뉴햄프셔 브레튼우즈에 모여 설계했다. 핵심은 세 가지: (1) 달러-금 고정환율제(1온스=35달러), (2) IMF(국제통화기금) 설립으로 통화 안정, (3) IBRD(세계은행) 설립으로 전후 재건. 국제 경제를 "계획"한 것이 아니라 환율·무역·금융의 "규칙"을 설정한 것이다. 1971년 닉슨의 금태환 정지로 체제가 붕괴되었다.',
    source: 'https://en.wikipedia.org/wiki/Bretton_Woods_system',
  },
  {
    afterSection: 'sec-1-2',
    term: 'vTaiwan과 Pol.is',
    content:
      'vTaiwan은 대만 디지털부 장관 오드리 탕(Audrey Tang)이 2014년부터 추진한 시민 참여 플랫폼이다. 오픈소스 도구 Pol.is를 활용하는데, 참여자가 짧은 의견을 제출하고 서로의 의견에 동의/비동의 투표를 하면, PCA(주성분 분석) 알고리즘이 의견 군집을 시각화하고 대립하는 집단 사이에서도 합의점을 자동 도출한다. 2015-16년 우버 규제 사례가 대표적으로, 1,737명이 참여해 7개 합의안이 도출되었고 95%가 동의했다. 대만 정부는 26건 이상의 디지털 정책에서 합의안의 80% 이상을 실제 입법에 반영했다.',
    source: 'https://info.vtaiwan.tw/',
  },

  // ── sec-2-1 ──
  {
    afterSection: 'sec-2-1',
    term: '보이지 않는 손 (애덤 스미스)',
    content:
      '스미스는 《국부론》(1776)에서 "보이지 않는 손(invisible hand)"이라는 표현을 단 한 번 사용했다. 각 개인이 자기 이익을 추구하면, 의도하지 않았지만 사회 전체의 이익에 기여하게 된다는 관찰이다. 스미스가 시장 만능주의자였다는 통념과 달리, 그는 《도덕감정론》(1759)에서 공감(sympathy)을 도덕의 기초로 놓았고, 《국부론》에서도 독점 규제, 공교육, 공공 인프라의 필요성을 주장했다. 보고서에서 "보이지 않는 손은 틀 안에서 가장 잘 작동한다"는 표현은 스미스 자신의 입장과 일치한다.',
    source: 'https://en.wikipedia.org/wiki/Invisible_hand',
  },

  // ── sec-2-2 ──
  {
    afterSection: 'sec-2-2',
    term: '폴라니의 이중 운동',
    content:
      '칼 폴라니(Karl Polanyi)는 헝가리 출신 경제인류학자로, 1944년 저서 《거대한 전환(The Great Transformation)》에서 "이중 운동(double movement)" 개념을 제시했다. 시장이 토지·노동·화폐를 상품으로 만들려고 밀어붙이면(1차 운동), 사회가 자기보호를 위해 반격한다(2차 운동). 공장법·노동조합·사회보험은 이 반격의 산물이다. 보고서에서 이 개념이 핵심적인 이유는 "속도"와의 관계다 — 이중 운동이 작동하려면 사회가 반격할 시간이 필요한데, 산업 시대에는 그 시간이 있었고 AI 시대에는 줄어든다는 것이 보고서의 핵심 논증이다.',
    source: 'https://en.wikipedia.org/wiki/The_Great_Transformation_(book)',
  },

  // ── sec-2-3 ──
  {
    afterSection: 'sec-2-3',
    term: '오이켄의 질서경제학 (Ordnungsrahmen)',
    content:
      '발터 오이켄(Walter Eucken, 1891-1950)은 독일 프라이부르크 대학의 경제학자로, 질서자유주의(Ordoliberalismus)의 창시자다. 핵심 주장: 개별 규칙(rule)을 나열하는 것이 아니라 경제가 작동할 "질서의 틀(Ordnungsrahmen)"을 설계해야 한다. 이것이 보고서의 "질서 자체가 아니라 질서가 작동할 조건을 설계"와 직결된다. 전후 독일 사회적 시장경제(Soziale Marktwirtschaft) — 경쟁법, 중앙은행 독립, 사회보험이라는 3대 기둥 — 는 오이켄의 구상을 실현한 것이다. 시장을 직접 운영하지 않되, 경쟁이 작동할 조건을 국가가 보장한다.',
    source: 'https://en.wikipedia.org/wiki/Walter_Eucken',
  },

  // ── sec-3-2 ──
  {
    afterSection: 'sec-3-2',
    term: '하이에크의 자생적 질서론',
    content:
      '프리드리히 하이에크(Friedrich Hayek, 1899-1992)는 오스트리아 출신 경제학자·정치철학자로, 1974년 노벨 경제학상을 수상했다. 핵심 논증: 경제 질서는 수백만 명이 가진 분산된 지식(dispersed knowledge)의 산물이며, 어떤 중앙 계획자도 이 지식을 모을 수 없다. 따라서 경제를 위에서 "설계"하려는 시도는 필연적으로 실패한다. 소련의 중앙계획경제가 대표적 증거다. 보고서는 이 반론을 진지하게 수용하면서, "질서 자체의 설계"와 "질서가 작동할 조건의 설계"를 구분함으로써 하이에크의 비판을 우회한다.',
    source: 'https://en.wikipedia.org/wiki/Friedrich_Hayek',
  },

  // ── sec-4-1 ──
  {
    afterSection: 'sec-4-1',
    term: '호펠드 권리 구조',
    content:
      '웨슬리 호펠드(Wesley Hohfeld, 1879-1918)는 예일대 법학 교수로, 1917년 논문에서 "권리"를 네 쌍의 상관 관계로 분해했다: (1) 권리-의무(right-duty), (2) 자유-무권리(privilege-no-right), (3) 권한-책임(power-liability), (4) 면제-무능력(immunity-disability). "A가 B에 대해 권리를 갖는다"는 말은 "B가 A에 대해 의무를 진다"는 말과 정확히 같다. 이 체계가 보고서에서 중요한 이유: 법적 관계는 반드시 "당사자"를 전제한다. 당사자(주체)가 정의되지 않으면 권리와 의무를 배정할 수 없으므로, ❶(주체 정의)이 ❷(관계 정의)보다 논리적으로 선행해야 한다.',
    source: 'https://en.wikipedia.org/wiki/Hohfeld%27s_fundamental_legal_conceptions',
  },

  // ── sec-4-2 ──
  {
    afterSection: 'sec-4-2',
    term: '법인의 탄생 — 왕실 칙허에서 일반 등록으로',
    content:
      '중세부터 18세기까지 기업 설립에는 왕실 칙허(Royal Charter)나 의회 특별법이 필요했다. 동인도회사(1600), 허드슨 베이 컴퍼니(1670) 등이 대표적이다. 각 기업마다 개별 허가를 받아야 했고, 특허장에 명시된 사업 범위만 영위할 수 있었다. 1844년 영국 합자회사법이 이 구조를 깨뜨렸다 — 등록만 하면 누구나 회사를 설립할 수 있게 되었다. "허가제에서 등록제로"의 전환이다. 이후 법인이라는 범주 위에 모든 근대 상법·노동법·세법이 세워졌다. 보고서가 AI에 대한 "전자인(electronic person)"을 제안하는 것은, 이 역사적 전환의 AI 시대 버전이다.',
    source: 'https://en.wikipedia.org/wiki/Joint_Stock_Companies_Act_1844',
  },
  {
    afterSection: 'sec-4-2',
    term: 'EU 전자인격 논의 (2017)',
    content:
      '2017년 유럽의회는 로봇에 "전자인격(electronic personhood)"을 부여하는 결의안을 채택했다. 로봇이 자율적으로 행동할 때 손해배상 능력을 갖추게 하자는 취지였다. 그러나 유럽 AI 전문가 156명이 공개서한으로 반대했다. 핵심 우려: 법적 지위를 부여하면 개발자·제조자의 책임이 희석될 수 있다. 이후 EU는 이 방향을 포기하고, 2024년 AI Act에서는 AI의 법적 지위 문제를 회피했으며, 2025년에는 AI 책임 지침(Liability Directive)마저 철회했다. 8년간 프레임이 없는 상태다.',
    source: 'https://en.wikipedia.org/wiki/European_Parliament_resolution_of_16_February_2017',
  },

  // ── sec-4-3 ──
  {
    afterSection: 'sec-4-3',
    term: '역량 접근법 (센, 누스바움)',
    content:
      '아마르티아 센(Amartya Sen, 1933-)은 인도 출신 경제학자로 1998년 노벨 경제학상을 수상했다. 마사 누스바움(Martha Nussbaum, 1947-)은 시카고대 철학 교수다. 두 사람이 공동 발전시킨 역량 접근법(capability approach)은 인간의 삶의 질을 소득이 아니라 "할 수 있고 될 수 있는 것(beings and doings)"으로 측정한다. 누스바움은 10가지 핵심 역량 목록 — 생명, 신체 건강, 신체 자유, 감각·상상력·사고, 감정, 실천 이성, 관계, 타종과의 공존, 놀이, 환경 통제 — 을 제시했다. 보고서는 AI 시대에 "디지털 역량"을 이 목록에 추가해야 한다고 제안한다.',
    source: 'https://en.wikipedia.org/wiki/Capability_approach',
  },
  {
    afterSection: 'sec-4-3',
    term: '감시 자본주의 (주보프)',
    content:
      '쇼샤나 주보프(Shoshana Zuboff, 1951-)는 하버드 경영대 교수로, 2019년 저서 《감시 자본주의 시대(The Age of Surveillance Capitalism)》에서 새로운 경제 형태를 분석했다. 핵심: 구글·페이스북 등 플랫폼 기업이 사용자의 행동 데이터를 일방적으로 수집하고, 이를 "행동 잉여(behavioral surplus)"로 변환하여 광고주에게 판매한다. 사용자는 제품이 아니라 원료다. 이 구조에서 데이터 제공자(사용자)에게는 보상이 돌아가지 않으며, 기업은 인간 행동을 예측하고 조작하는 권력을 축적한다.',
    source: 'https://en.wikipedia.org/wiki/The_Age_of_Surveillance_Capitalism',
  },

  // ── sec-4-4 ──
  {
    afterSection: 'sec-4-4',
    term: '기본소득 (반 파레이스)',
    content:
      '필리프 반 파레이스(Philippe Van Parijs, 1951-)는 벨기에 루뱅대 철학·경제학 교수로, 기본소득(Universal Basic Income) 이론의 대표적 학자다. 1995년 저서 《모두에게 실질적 자유를(Real Freedom for All)》에서 "무조건적·보편적·개인 단위" 기본소득을 정당화했다. 핵심 논거: 노동 여부와 관계없이 모든 시민에게 기본 소득을 보장하는 것이 실질적 자유의 조건이다. 핀란드(2017-18), 케냐 GiveDirectly(2016-), 캐나다 온타리오(2017-18) 등에서 실험이 진행되었다.',
    source: 'https://en.wikipedia.org/wiki/Philippe_Van_Parijs',
  },
  {
    afterSection: 'sec-4-4',
    term: '데이터 배당 (라니어)',
    content:
      '재런 라니어(Jaron Lanier, 1960-)는 실리콘밸리의 기술비평가이자 VR(가상현실)의 선구자다. 2013년 저서 《누가 미래를 소유하는가(Who Owns the Future?)》에서 데이터 배당(data dividend) 개념을 제안했다. 핵심: 데이터를 제공하는 사람들에게 마이크로 페이먼트(초소액 결제)를 지급해야 한다. 현재 구조에서는 사용자의 데이터가 무료로 수집되어 AI 훈련에 쓰이고, 수익은 기업에 집중된다. 라니어는 이것을 "시럽 경제(siren server)" 구조라 비판했다.',
    source: 'https://en.wikipedia.org/wiki/Who_Owns_the_Future%3F',
  },
  {
    afterSection: 'sec-4-4',
    term: '공공 데이터 신탁과 공공 AI 인프라',
    content:
      '마리아나 마추카토(Mariana Mazzucato, 1968-)는 UCL 혁신경제학 교수다. 2018년 저서 《기업가형 국가(The Entrepreneurial State)》 등에서 주장한 핵심: AI가 만들어내는 가치의 상당 부분이 공공 투자(인터넷, GPS, 대학 연구, 공공 데이터)에 기반하므로, 수익을 공공에 환원하는 구조가 필요하다. 공공 데이터 신탁(Public Data Trust)은 시민의 데이터를 신탁 구조로 관리하여, 데이터 활용 수익의 일부를 공공 목적에 환원하는 메커니즘이다. 노르웨이 국부펀드(석유 수익의 공공 환원)가 유비(analogy)로 자주 인용된다.',
    source: 'https://en.wikipedia.org/wiki/Mariana_Mazzucato',
  },
  {
    afterSection: 'sec-4-4',
    term: 'Collective Constitutional AI',
    content:
      '앤트로픽이 2023년 수행한 실험으로, 1,094명의 미국 시민이 AI의 가치관(헌법)에 직접 투표했다. 기존 Constitutional AI는 앤트로픽 연구진이 AI의 행동 원칙을 작성했는데, 이 실험에서는 시민이 원칙을 결정했다. 결과: 시민이 만든 헌법으로 훈련된 모델은 9개 사회적 차원(인종, 성별, 종교 등) 모두에서 편향이 더 낮았다(Huang et al., 2024). AI 가치 정렬에 시민의 직접 참여가 유효하다는 최초의 대규모 실험 증거다.',
    source: 'https://arxiv.org/abs/2401.09798',
  },
  {
    afterSection: 'sec-4-4',
    term: '하버마스 머신 (Habermas Machine)',
    content:
      'Science지에 발표된 연구(Tessler et al., 2024)로, 독일 철학자 위르겐 하버마스의 "이상적 담화(ideal discourse)" 이론에서 이름을 빌렸다. 하버마스는 모든 참여자가 평등하게 발언하고, 강제 없이 더 나은 논거만이 힘을 갖는 의사소통 상황을 이론화했다. 하버마스 머신 실험에서는 5,734명의 참여자가 사회적 이슈에 대해 토론하고, AI 중재자가 합의안을 생성했다. AI가 작성한 합의안은 인간 중재자가 작성한 것보다 56% 더 높은 선호도를 받았다.',
    source: 'https://www.science.org/doi/10.1126/science.adq2852',
  },

  // ── sec-5-1 ──
  {
    afterSection: 'sec-5-1',
    term: '칸트의 인간 존엄',
    content:
      '이마누엘 칸트(Immanuel Kant, 1724-1804)는 《도덕 형이상학 정초》(1785)에서 정언명법(categorical imperative)의 두 번째 정식을 제시했다: "인간을 — 자기 자신이든 타인이든 — 결코 단순한 수단으로만 대우하지 말고, 언제나 동시에 목적으로 대우하라." 인간의 존엄(Würde)은 시장 가격(Preis)과 달리 대체할 수 없는 절대적 가치다. 보고서가 "노동 중심에서 인간 중심으로"의 가치 전환을 말할 때, 칸트의 이 원리가 철학적 기초다 — 인간의 가치는 생산성이 아니라 인격 자체에 있다.',
    source: 'https://en.wikipedia.org/wiki/Categorical_imperative',
  },
  {
    afterSection: 'sec-5-1',
    term: '아렌트의 시작 능력 (탄생성)',
    content:
      '한나 아렌트(Hannah Arendt, 1906-1975)는 독일 출신의 정치철학자다. 1958년 저서 《인간의 조건(The Human Condition)》에서 인간 행위의 핵심을 "탄생성(natality)" — 새로운 것을 시작할 수 있는 능력 — 으로 규정했다. 인간은 노동하는 존재(animal laborans)이기 이전에 행위하는 존재(homo faber)이며, 행위의 본질은 예측할 수 없는 새로움을 세계에 가져오는 것이다. AI가 노동을 대체하더라도, 새로운 시작을 할 수 있는 능력은 인간 고유의 것이며, 이것이 존엄의 근거다.',
    source: 'https://en.wikipedia.org/wiki/The_Human_Condition_(Arendt_book)',
  },
]
