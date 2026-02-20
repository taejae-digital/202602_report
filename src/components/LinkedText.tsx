import { ReactNode } from 'react'

const NAME_MAP: [RegExp, string][] = [
  [/주보프/g, 'zuboff'],
  [/피케티/g, 'piketty'],
  [/하라리/g, 'harari'],
  [/힌튼/g, 'hinton'],
  [/술레이만/g, 'suleyman'],
  [/샌델/g, 'sandel'],
  [/페레즈/g, 'perez'],
  [/누스바움/g, 'nussbaum'],
  [/가라타니/g, 'karatani'],
  [/한병철/g, 'han'],
  [/벤지오/g, 'bengio'],
  [/보스트롬/g, 'bostrom'],
  [/러셀/g, 'russell'],
  [/크로포드/g, 'crawford'],
  [/스탠딩/g, 'standing'],
  [/사이토/g, 'saito'],
  [/페데리치/g, 'federici'],
  [/아세모글루/g, 'acemoglu'],
  [/마추카토/g, 'mazzucato'],
  [/플로리디/g, 'floridi'],
  [/유크 후이/g, 'yuk-hui'],
  [/라니어/g, 'lanier'],
  [/오드리 탕/g, 'tang'],
  [/반 파레이스/g, 'van-parijs'],
  [/센\(1999\)/g, 'sen'],
  [/센\(2009\)/g, 'sen'],
  [/센과/g, 'sen'],
  [/폴라니/g, ''],
  [/하이에크/g, ''],
  [/Zuboff/g, 'zuboff'],
  [/Piketty/g, 'piketty'],
  [/Harari/g, 'harari'],
  [/Hinton/g, 'hinton'],
  [/Suleyman/g, 'suleyman'],
  [/Sandel/g, 'sandel'],
  [/Perez/g, 'perez'],
  [/Nussbaum/g, 'nussbaum'],
  [/Karatani/g, 'karatani'],
  [/Bengio/g, 'bengio'],
  [/Bostrom/g, 'bostrom'],
  [/Russell/g, 'russell'],
  [/Crawford/g, 'crawford'],
  [/Standing/g, 'standing'],
  [/Acemoglu/g, 'acemoglu'],
  [/Mazzucato/g, 'mazzucato'],
  [/Floridi/g, 'floridi'],
  [/Lanier/g, 'lanier'],
]

// Build a single combined regex
const allPatterns = NAME_MAP.filter(([, id]) => id !== '').map(([re]) => re.source)
const COMBINED_RE = new RegExp(`(${allPatterns.join('|')})`, 'g')

function getIdForMatch(match: string): string {
  for (const [re, id] of NAME_MAP) {
    if (id && new RegExp(re.source).test(match)) return id
  }
  return ''
}

interface Props {
  text: string
  onResearcherClick: (id: string) => void
}

export function LinkedText({ text, onResearcherClick }: Props) {
  const parts: ReactNode[] = []
  let lastIndex = 0
  let key = 0

  for (const match of text.matchAll(COMBINED_RE)) {
    const idx = match.index!
    if (idx > lastIndex) {
      parts.push(text.slice(lastIndex, idx))
    }
    const matched = match[0]
    const id = getIdForMatch(matched)
    if (id) {
      parts.push(
        <button
          key={key++}
          className="researcher-link"
          onClick={() => onResearcherClick(id)}
        >
          {matched}
        </button>
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
