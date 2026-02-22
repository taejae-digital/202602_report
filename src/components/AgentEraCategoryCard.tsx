import type { AgentEraCategory } from '../data/agent-era-changes'

interface Props {
  category: AgentEraCategory
  index: number
}

export function AgentEraCategoryCard({ category, index }: Props) {
  return (
    <div style={{
      background: 'white',
      borderRadius: 16,
      border: '1px solid #e7e5e4',
      overflow: 'hidden',
    }}>
      <div style={{
        padding: '16px 20px',
        background: '#f8fafc',
        borderBottom: '1px solid #e7e5e4',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}>
        <span style={{ fontSize: 24 }}>{category.emoji}</span>
        <span style={{
          fontSize: 11,
          fontWeight: 700,
          color: '#94a3b8',
          marginRight: 4,
        }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e293b', margin: 0 }}>
          {category.title}
        </h3>
      </div>

      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{
          padding: 16,
          borderRadius: 10,
          background: '#fef2f2',
          borderLeft: '3px solid #f87171',
        }}>
          <div style={{
            fontSize: 11,
            fontWeight: 700,
            color: '#dc2626',
            marginBottom: 6,
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}>
            지금
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.7, color: '#4b5563', margin: 0 }}>
            {category.now}
          </p>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          color: '#94a3b8',
          fontSize: 18,
        }}>
          {'\u2193'}
        </div>

        <div style={{
          padding: 16,
          borderRadius: 10,
          background: '#ecfdf5',
          borderLeft: '3px solid #34d399',
        }}>
          <div style={{
            fontSize: 11,
            fontWeight: 700,
            color: '#059669',
            marginBottom: 6,
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}>
            에이전트 시대
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.7, color: '#4b5563', margin: 0 }}>
            {category.agentEra}
          </p>
        </div>
      </div>
    </div>
  )
}
