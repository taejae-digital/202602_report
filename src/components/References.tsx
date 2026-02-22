import { references, apaReferences } from '../data/references'

const typeLabels: Record<string, string> = {
  report: '보고서',
  article: '기사/논문',
  book: '저서',
  website: '웹사이트',
}

const typeColors: Record<string, { bg: string; color: string }> = {
  report: { bg: '#dbeafe', color: '#1e40af' },
  article: { bg: '#dcfce7', color: '#166534' },
  book: { bg: '#fef3c7', color: '#92400e' },
  website: { bg: '#f3e8ff', color: '#6b21a8' },
}

function formatApa(citation: string) {
  const parts = citation.split(/(\*[^*]+\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    return <span key={i}>{part}</span>
  })
}

export function References() {
  return (
    <div className="section">
      <h2 className="section-title">References (APA)</h2>
      <div style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 10,
        padding: '20px 24px',
        marginBottom: 32,
      }}>
        {apaReferences.map(ref => (
          <div
            key={ref.id}
            style={{
              fontSize: 13,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.8,
              paddingLeft: 32,
              textIndent: -32,
              marginBottom: 8,
            }}
          >
            {formatApa(ref.citation)}
          </div>
        ))}
      </div>

      <h2 className="section-title">실제 사례 및 자료 ({references.length})</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {references.map(ref => {
          const colors = typeColors[ref.type] || typeColors.article
          return (
            <div
              key={ref.id}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 10,
                padding: '14px 18px',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 6,
              }}>
                <span style={{
                  fontSize: 10,
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: 4,
                  background: colors.bg,
                  color: colors.color,
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                }}>
                  {typeLabels[ref.type]}
                </span>
                <span style={{
                  fontSize: 12,
                  color: 'var(--color-text-muted)',
                }}>
                  {ref.year}
                </span>
              </div>

              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text)' }}>
                {ref.url ? (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--color-primary-light)',
                      textDecoration: 'none',
                      borderBottom: '1px dotted var(--color-primary-light)',
                    }}
                  >
                    {ref.title}
                  </a>
                ) : (
                  ref.title
                )}
              </div>

              <div style={{
                fontSize: 12,
                color: 'var(--color-text-secondary)',
                marginTop: 2,
              }}>
                {ref.author}
              </div>

              <div style={{
                fontSize: 13,
                color: 'var(--color-text-secondary)',
                marginTop: 6,
                lineHeight: 1.6,
              }}>
                {ref.description}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
