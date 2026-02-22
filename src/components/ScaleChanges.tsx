import { ScaleChange } from '../data/future-scenarios'

interface Props {
  changes: ScaleChange[]
  color: string
}

export function ScaleChanges({ changes, color }: Props) {
  return (
    <div style={{ marginTop: 32 }}>
      <h4 style={{ fontSize: 16, fontWeight: 700, color, marginBottom: 16 }}>
        사회 규모별 변화
      </h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {changes.map((c, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr',
            gap: 12,
            padding: '12px 16px',
            background: i % 2 === 0 ? '#f9fafb' : 'white',
            borderRadius: 10,
            border: '1px solid #f3f4f6',
            alignItems: 'start',
          }}>
            <div style={{
              fontSize: 13,
              fontWeight: 700,
              color: '#374151',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}>
              <span>{c.emoji}</span> {c.scale}
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.7, color: '#4b5563' }}>
              {c.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
