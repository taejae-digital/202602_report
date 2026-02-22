import { ReactNode, useRef, useState } from 'react'
import { summaryHeaders, tableSections } from '../data/summary-table-data'

function parseBold(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

function renderLine(line: string, i: number): ReactNode {
  const pathA = line.match(/^•?\s*경로 A:\s*(.*)/)
  if (pathA) {
    return (
      <span key={i} style={{ display: 'block', marginBottom: 2 }}>
        <span className="path-badge path-a">경로 A</span>
        {parseBold(pathA[1])}
      </span>
    )
  }
  const pathB = line.match(/^•?\s*경로 B:\s*(.*)/)
  if (pathB) {
    return (
      <span key={i} style={{ display: 'block', marginTop: 6, marginBottom: 2 }}>
        <span className="path-badge path-b">경로 B</span>
        {parseBold(pathB[1])}
      </span>
    )
  }
  return <span key={i} style={{ display: 'block' }}>{parseBold(line)}</span>
}

function CellContent({ text }: { text: string }) {
  if (!text) return null
  return <>{text.split('\n').map(renderLine)}</>
}

function SubLabel({ text }: { text: string }) {
  return (
    <div className="sub-label-badge">
      {text.split('\n').map((l, i) => (
        <span key={i}>{i > 0 && <br />}{l}</span>
      ))}
    </div>
  )
}

function tableToText(): string {
  const sep = '\t'
  const header = summaryHeaders.join(sep)
  const rows: string[] = []
  for (const sec of tableSections) {
    for (let i = 0; i < sec.rows.length; i++) {
      const r = sec.rows[i]
      const phase = i === 0 ? `${sec.phaseEn} ${sec.phase}` : ''
      const label = r.label?.replace(/\n/g, ' ') ?? ''
      const col1 = [phase, label].filter(Boolean).join(' / ')
      const strip = (s: string) => s.replace(/\*\*/g, '').replace(/\n/g, ' ')
      rows.push(
        [col1, strip(r.industrial), strip(r.digital), strip(r.academic)].join(sep),
      )
    }
  }
  return [header, ...rows].join('\n')
}

export function SummaryTable() {
  const tableRef = useRef<HTMLTableElement>(null)
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!tableRef.current) return
    const html = tableRef.current.outerHTML
    const text = tableToText()
    await navigator.clipboard.write([
      new ClipboardItem({
        'text/html': new Blob([html], { type: 'text/html' }),
        'text/plain': new Blob([text], { type: 'text/plain' }),
      }),
    ])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{ marginTop: 40 }}>
      <div className="summary-table-header">
        <h3 style={{ fontSize: '1rem', margin: 0, color: '#1e3a5f' }}>
          페레즈 사이클 × 연구 프레임워크
        </h3>
        <button onClick={handleCopy} className="copy-table-btn">
          {copied ? '복사됨 ✓' : '테이블 복사'}
        </button>
      </div>
      <div className="summary-table-scroll">
        <table className="summary-table" ref={tableRef}>
          <thead>
            <tr>
              {summaryHeaders.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableSections.map((sec) =>
              sec.rows.map((row, ri) => {
                const cls = sec.highlight === 'current'
                  ? 'current-phase'
                  : sec.highlight === 'turning'
                    ? 'turning-phase'
                    : ''
                return (
                  <tr key={`${sec.phaseEn}-${ri}`} className={cls}>
                    {ri === 0 && (
                      <td className="stage-col" rowSpan={sec.rows.length}>
                        <span className="phase-en">{sec.phaseEn}</span>
                        <strong>{sec.phase}</strong>
                        {sec.highlight === 'current' && (
                          <span className="current-marker">← 현재</span>
                        )}
                      </td>
                    )}
                    <td>
                      {row.label && <SubLabel text={row.label} />}
                      <CellContent text={row.industrial} />
                    </td>
                    <td><CellContent text={row.digital} /></td>
                    <td><CellContent text={row.academic} /></td>
                  </tr>
                )
              }),
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
