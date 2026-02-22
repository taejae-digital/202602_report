import { quotes } from '../data/quotes'

export function QuotesView() {
  return (
    <div className="section">
      <h2 className="section-title">주요 인용문 ({quotes.length})</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: 16,
      }}>
        {quotes.map(q => (
          <div
            key={q.id}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderLeft: '4px solid var(--color-primary-light)',
              borderRadius: 10,
              padding: '18px 20px',
            }}
          >
            <div style={{
              fontSize: 15,
              fontWeight: 600,
              color: 'var(--color-text)',
              lineHeight: 1.7,
              marginBottom: 12,
            }}>
              &ldquo;{q.text}&rdquo;
            </div>

            <div style={{
              fontSize: 13,
              color: 'var(--color-text-secondary)',
              fontWeight: 600,
            }}>
              {q.author}
              <span style={{
                fontWeight: 400,
                color: 'var(--color-text-muted)',
                marginLeft: 6,
              }}>
                {q.authorEn}
              </span>
            </div>

            <div style={{
              fontSize: 12,
              color: 'var(--color-text-muted)',
              fontStyle: 'italic',
              marginTop: 4,
            }}>
              {q.source} ({q.year})
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
