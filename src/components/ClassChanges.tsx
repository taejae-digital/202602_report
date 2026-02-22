import { ClassChange } from '../data/future-scenarios'

interface Props {
  changes: ClassChange[]
  color: string
}

export function ClassChanges({ changes, color }: Props) {
  return (
    <div style={{ marginTop: 32 }}>
      <h4 style={{ fontSize: 16, fontWeight: 700, color, marginBottom: 16 }}>
        경제 계층별 변화
      </h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {changes.map((c, i) => (
          <div key={i} style={{
            padding: 16,
            borderRadius: 12,
            background: 'white',
            border: '1px solid #e5e7eb',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 8,
            }}>
              <span style={{ fontSize: 18 }}>{c.emoji}</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: '#1f2937' }}>
                {c.role}
              </span>
              <span style={{
                fontSize: 11,
                fontWeight: 600,
                padding: '2px 10px',
                borderRadius: 20,
                background: getTrendBg(c.trend),
                color: getTrendColor(c.trend),
              }}>
                {c.trend}
              </span>
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

function getTrendBg(trend: string): string {
  if (trend.includes('집중') || trend.includes('위기')) return '#fef2f2'
  if (trend.includes('감소') || trend.includes('급감') || trend.includes('소멸')) return '#fff7ed'
  if (trend.includes('평준화') || trend.includes('가치') || trend.includes('보스')) return '#ecfdf5'
  if (trend.includes('격차') || trend.includes('빈곤')) return '#fefce8'
  return '#f3f4f6'
}

function getTrendColor(trend: string): string {
  if (trend.includes('집중') || trend.includes('위기')) return '#dc2626'
  if (trend.includes('감소') || trend.includes('급감') || trend.includes('소멸')) return '#ea580c'
  if (trend.includes('평준화') || trend.includes('가치') || trend.includes('보스')) return '#16a34a'
  if (trend.includes('격차') || trend.includes('빈곤')) return '#ca8a04'
  return '#6b7280'
}
