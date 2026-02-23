import { ReactNode } from 'react'
import { ResearcherInlineLink } from './ResearcherInlineLink'
import { ConceptInlineLink } from './ConceptInlineLink'

// 'r:id' = researcher, 'c:index' = concept
const LINK_MAP: [RegExp, string][] = [
  // ── Concept keywords (longer patterns first) ──
  [/다섯 차례의 기술 혁명/g, 'c:0'],
  [/러다이트 운동/g, 'c:1'],
  [/법인을 일반화/g, 'c:2'],
  [/진보 시대 개혁/g, 'c:3'],
  [/살트셰바덴 협약/g, 'c:4'],
  [/브레튼우즈 체제/g, 'c:5'],
  [/vTaiwan/g, 'c:6'],
  [/보이지 않는 손/g, 'c:7'],
  [/이중 운동/g, 'c:8'],
  [/사회적 시장경제/g, 'c:9'],
  [/분산된 지식/g, 'c:10'],
  [/네 쌍의 상관 구조/g, 'c:11'],
  [/법적 인격을 부여/g, 'c:12'],
  [/전자인격/g, 'c:13'],
  [/역량 접근법/g, 'c:14'],
  [/기본소득/g, 'c:16'],
  [/데이터 배당/g, 'c:17'],
  [/공공 AI 인프라/g, 'c:18'],
  [/Collective Constitutional AI/g, 'c:19'],
  [/하버마스 머신/g, 'c:20'],
  [/수단이 아닌 목적/g, 'c:21'],
  [/새로움을 시작할 수 있는 능력/g, 'c:22'],

  // ── Researcher names (Korean) ──
  [/유크 후이/g, 'r:yuk-hui'],
  [/오드리 탕/g, 'r:tang'],
  [/반 파레이스/g, 'r:van-parijs'],
  [/한병철/g, 'r:han'],
  [/주보프/g, 'r:zuboff'],
  [/피케티/g, 'r:piketty'],
  [/하라리/g, 'r:harari'],
  [/힌튼/g, 'r:hinton'],
  [/술레이만/g, 'r:suleyman'],
  [/샌델/g, 'r:sandel'],
  [/페레즈/g, 'r:perez'],
  [/누스바움/g, 'r:nussbaum'],
  [/가라타니/g, 'r:karatani'],
  [/벤지오/g, 'r:bengio'],
  [/보스트롬/g, 'r:bostrom'],
  [/러셀/g, 'r:russell'],
  [/칸트/g, 'r:kant'],
  [/오닐/g, 'r:oneil'],
  [/크로포드/g, 'r:crawford'],
  [/스탠딩/g, 'r:standing'],
  [/사이토/g, 'r:saito'],
  [/페데리치/g, 'r:federici'],
  [/사레위츠/g, 'r:sarewitz'],
  [/아세모글루/g, 'r:acemoglu'],
  [/존슨/g, 'r:johnson'],
  [/마추카토/g, 'r:mazzucato'],
  [/플로리디/g, 'r:floridi'],
  [/라니어/g, 'r:lanier'],
  [/아모데이/g, 'r:amodei'],
  [/오이켄/g, 'r:eucken'],
  [/반버그/g, 'r:vanberg'],
  [/호펠드/g, 'r:hohfeld'],
  [/아오키/g, 'r:aoki'],
  [/솔럼/g, 'r:solum'],
  [/아렌트/g, 'r:arendt'],
  [/폴라니/g, 'r:polanyi'],
  [/하이에크/g, 'r:hayek'],
  [/마르크스/g, 'r:marx'],
  [/스미스/g, 'r:smith'],
  [/프레이저/g, 'r:fraser'],
  [/센\(1999\)/g, 'r:sen'],
  [/센\(2009\)/g, 'r:sen'],
  [/센과/g, 'r:sen'],

  // ── Researcher names (English) ──
  [/Chopra/g, 'r:chopra'],
  [/White/g, 'r:white-lf'],
  [/Kolt/g, 'r:kolt'],
  [/Kant/g, 'r:kant'],
  [/O'Neil/g, 'r:oneil'],
  [/Oliver/g, 'r:oliver'],
  [/Bayern/g, 'r:bayern'],
  [/Vanberg/g, 'r:vanberg'],
  [/Zuboff/g, 'r:zuboff'],
  [/Piketty/g, 'r:piketty'],
  [/Harari/g, 'r:harari'],
  [/Hinton/g, 'r:hinton'],
  [/Suleyman/g, 'r:suleyman'],
  [/Sandel/g, 'r:sandel'],
  [/Perez/g, 'r:perez'],
  [/Nussbaum/g, 'r:nussbaum'],
  [/Karatani/g, 'r:karatani'],
  [/Bengio/g, 'r:bengio'],
  [/Bostrom/g, 'r:bostrom'],
  [/Russell/g, 'r:russell'],
  [/Crawford/g, 'r:crawford'],
  [/Standing/g, 'r:standing'],
  [/Acemoglu/g, 'r:acemoglu'],
  [/Mazzucato/g, 'r:mazzucato'],
  [/Floridi/g, 'r:floridi'],
  [/Lanier/g, 'r:lanier'],
  [/Sarewitz/g, 'r:sarewitz'],
  [/Johnson/g, 'r:johnson'],
]

// Build a single combined regex
const allPatterns = LINK_MAP.map(([re]) => re.source)
const COMBINED_RE = new RegExp(`(${allPatterns.join('|')})`, 'g')

function getLinkForMatch(match: string): string {
  for (const [re, id] of LINK_MAP) {
    if (new RegExp(re.source).test(match)) return id
  }
  return ''
}

interface Props {
  text: string
}

export function LinkedText({ text }: Props) {
  const parts: ReactNode[] = []
  let lastIndex = 0
  let key = 0

  for (const match of text.matchAll(COMBINED_RE)) {
    const idx = match.index!
    if (idx > lastIndex) {
      parts.push(text.slice(lastIndex, idx))
    }
    const matched = match[0]
    const linkId = getLinkForMatch(matched)

    if (linkId.startsWith('r:')) {
      parts.push(
        <ResearcherInlineLink
          key={key++}
          id={linkId.slice(2)}
          displayText={matched}
        />
      )
    } else if (linkId.startsWith('c:')) {
      parts.push(
        <ConceptInlineLink
          key={key++}
          index={parseInt(linkId.slice(2), 10)}
          displayText={matched}
        />
      )
    } else {
      parts.push(matched)
    }
    lastIndex = idx + matched.length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return <>{parts}</>
}
