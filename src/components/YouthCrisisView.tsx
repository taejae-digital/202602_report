import { koreaStats, globalComparison, crisisSections, sources } from '../data/youth-crisis-data'
import { ReactNode } from 'react'

function parseBold(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

function StatTable({ title, stats, accent }: {
  title: string
  stats: { label: string; value: string; note?: string }[]
  accent: string
}) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: accent, marginBottom: 10 }}>
        {title}
      </h3>
      <div style={{
        borderRadius: 10,
        overflow: 'hidden',
        border: '1px solid var(--color-border)',
      }}>
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 16px',
              background: i % 2 === 0 ? 'var(--color-surface)' : 'transparent',
              borderBottom: i < stats.length - 1 ? '1px solid var(--color-border)' : 'none',
              gap: 12,
            }}
          >
            <div style={{ flex: 1, fontSize: 13, color: 'var(--color-text-secondary)' }}>
              {s.label}
            </div>
            <div style={{
              fontSize: 15,
              fontWeight: 700,
              color: accent,
              minWidth: 90,
              textAlign: 'right',
            }}>
              {s.value}
            </div>
            {s.note && (
              <div style={{
                fontSize: 11,
                color: 'var(--color-text-muted)',
                minWidth: 160,
              }}>
                {s.note}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export function YouthCrisisView() {
  return (
    <div className="section">
      <h2 className="section-title">청년 고용 위기와 AI</h2>

      <div style={{
        background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
        borderRadius: 12,
        padding: '16px 20px',
        marginBottom: 24,
        borderLeft: '4px solid #f59e0b',
      }}>
        <div style={{ fontSize: 14, lineHeight: 1.7, color: '#78350f' }}>
          AI 시대의 사회 계약을 논의할 때, 한국의 청년 고용 위기는
          "미래의 문제"가 아니라 <strong>"이미 진행 중인 위기"</strong>다.
          AI가 본격적으로 노동시장을 재편하기 전부터, 한국 청년은 구조적
          고용 불안정에 놓여 있다.
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: 20,
      }}>
        <StatTable
          title="한국 청년 고용 지표 (2024–25)"
          stats={koreaStats}
          accent="#dc2626"
        />
        <StatTable
          title="국제 비교: 청년 실업률"
          stats={globalComparison}
          accent="#2563eb"
        />
      </div>

      {crisisSections.map(sec => (
        <div
          key={sec.id}
          style={{
            marginBottom: 24,
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 10,
            padding: '18px 22px',
          }}
        >
          <h3 style={{
            fontSize: 15,
            fontWeight: 700,
            color: 'var(--color-primary)',
            marginBottom: 12,
          }}>
            {sec.title}
          </h3>
          {sec.paragraphs.map((p, i) => (
            <div
              key={i}
              style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: 'var(--color-text)',
                marginBottom: i < sec.paragraphs.length - 1 ? 10 : 0,
              }}
            >
              {parseBold(p)}
            </div>
          ))}
        </div>
      ))}

      <div style={{
        background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
        borderRadius: 12,
        padding: '16px 20px',
        marginBottom: 24,
        borderLeft: '4px solid #2563eb',
      }}>
        <div style={{ fontSize: 14, lineHeight: 1.7, color: '#1e3a5f' }}>
          <strong>본 연구의 ❸ 질서 설계가 시급한 이유:</strong> 정규직 중심
          고용보험 체계는 비정규직·플랫폼 노동자·NEET 등 가장 취약한
          청년층을 포괄하지 못한다. AI로 인한 직군 소멸이라는 새로운
          유형의 실업에 대응하는 정책 프레임워크가 부재한 상황에서,
          사회 계약의 재설계는 더 이상 선택이 아니라 필수다.
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <h4 style={{
          fontSize: 12,
          fontWeight: 600,
          color: 'var(--color-text-muted)',
          marginBottom: 8,
        }}>
          주요 출처
        </h4>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
        }}>
          {sources.map((s, i) => (
            <span
              key={i}
              style={{
                fontSize: 11,
                color: 'var(--color-text-muted)',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 6,
                padding: '4px 10px',
              }}
            >
              <strong>{s.label}</strong> — {s.desc}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
