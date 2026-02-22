import { aslLevels, frameworkComparisons, policyImplications, aslSources } from '../data/asl-data'

const statusColor: Record<string, string> = {
  '과거': '#9ca3af',
  'Claude Sonnet 4': '#3b82f6',
  'Claude Opus 4.6 (현재)': '#dc2626',
  '미정의': '#f59e0b',
  '개념적': '#6b7280',
}

function ASLLevelCard({ level }: { level: typeof aslLevels[0] }) {
  const isCurrent = level.status.includes('현재')
  return (
    <div style={{
      background: isCurrent
        ? 'linear-gradient(135deg, #fef2f2, #fee2e2)'
        : 'var(--color-surface)',
      border: isCurrent
        ? '2px solid #dc2626'
        : '1px solid var(--color-border)',
      borderRadius: 10,
      padding: '16px 20px',
      marginBottom: 12,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <span style={{
          fontSize: 13,
          fontWeight: 800,
          color: '#fff',
          background: isCurrent ? '#dc2626' : '#374151',
          borderRadius: 6,
          padding: '3px 10px',
        }}>
          {level.level}
        </span>
        <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text)' }}>
          {level.title}
        </span>
        <span style={{
          marginLeft: 'auto',
          fontSize: 11,
          fontWeight: 600,
          color: statusColor[level.status] ?? '#6b7280',
        }}>
          {level.status}
        </span>
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
        <strong style={{ color: 'var(--color-text)' }}>역량:</strong> {level.capability}
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
        <strong style={{ color: 'var(--color-text)' }}>안전 조치:</strong> {level.safeguards}
      </div>
      <div style={{
        fontSize: 12,
        lineHeight: 1.6,
        color: 'var(--color-text-muted)',
        background: 'rgba(0,0,0,0.04)',
        borderRadius: 6,
        padding: '6px 10px',
      }}>
        {level.bslAnalogy}
      </div>
    </div>
  )
}

export function ASLView() {
  return (
    <div className="section">
      <h2 className="section-title">AI Safety Levels (ASL)</h2>

      <div style={{
        background: 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
        borderRadius: 12,
        padding: '16px 20px',
        marginBottom: 24,
        borderLeft: '4px solid #7c3aed',
      }}>
        <div style={{ fontSize: 14, lineHeight: 1.7, color: '#3b0764' }}>
          Anthropic의 <strong>책임 있는 확장 정책(Responsible Scaling Policy)</strong>은
          AI 모델의 역량이 증가함에 따라 안전 조치도 비례하여 강화하는 체계다.
          미국 정부의 <strong>생물안전등급(BSL)</strong>에서 영감을 받아
          설계되었으며, 본 연구의 <strong>❶ 주체 정의</strong>에서 제안하는
          자율성 스펙트럼(도구 → 대리인 → 준자율 → 자율)과 구조적으로 유사하다.
        </div>
      </div>

      {aslLevels.map(level => (
        <ASLLevelCard key={level.level} level={level} />
      ))}

      <h3 style={{
        fontSize: 16,
        fontWeight: 700,
        color: 'var(--color-primary)',
        marginTop: 28,
        marginBottom: 14,
      }}>
        주요 AI 안전 프레임워크 비교
      </h3>

      <div style={{
        borderRadius: 10,
        overflow: 'hidden',
        border: '1px solid var(--color-border)',
        marginBottom: 24,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr 1.4fr 1fr 1fr',
          background: '#1e293b',
          padding: '10px 14px',
          gap: 8,
        }}>
          {['프레임워크', '유형', '접근법', '집행력', '범위'].map(h => (
            <div key={h} style={{ fontSize: 11, fontWeight: 700, color: '#fff' }}>{h}</div>
          ))}
        </div>
        {frameworkComparisons.map((fw, i) => (
          <div
            key={fw.name}
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr 1.4fr 1fr 1fr',
              padding: '10px 14px',
              background: i % 2 === 0 ? 'var(--color-surface)' : 'transparent',
              borderBottom: i < frameworkComparisons.length - 1
                ? '1px solid var(--color-border)' : 'none',
              gap: 8,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text)' }}>
              {fw.name}
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>
              {fw.type}
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>
              {fw.approach}
            </div>
            <div style={{
              fontSize: 12,
              color: fw.enforcement.includes('벌금') ? '#dc2626' : 'var(--color-text-muted)',
              fontWeight: fw.enforcement.includes('벌금') ? 600 : 400,
            }}>
              {fw.enforcement}
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>
              {fw.scope}
            </div>
          </div>
        ))}
      </div>

      <h3 style={{
        fontSize: 16,
        fontWeight: 700,
        color: 'var(--color-primary)',
        marginBottom: 14,
      }}>
        사회계약 연구에서의 정책적 함의
      </h3>

      {policyImplications.map(pi => (
        <div
          key={pi.area}
          style={{
            display: 'flex',
            gap: 12,
            marginBottom: 10,
            padding: '10px 14px',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 8,
          }}
        >
          <span style={{
            fontSize: 12,
            fontWeight: 700,
            color: '#7c3aed',
            minWidth: 90,
            flexShrink: 0,
          }}>
            {pi.area}
          </span>
          <span style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
            {pi.implication}
          </span>
        </div>
      ))}

      <div style={{
        background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
        borderRadius: 12,
        padding: '16px 20px',
        marginTop: 20,
        marginBottom: 24,
        borderLeft: '4px solid #059669',
      }}>
        <div style={{ fontSize: 14, lineHeight: 1.7, color: '#064e3b' }}>
          <strong>본 연구와의 연결:</strong> ASL의 점진적 확대 모델은
          ❶ 주체 정의에서 제안하는 전자인 스펙트럼(도구 → 대리인 → 준자율 → 자율)과
          정확히 대응한다. 자율성 수준에 따라 법적 범주와 안전 조치가 함께
          확대되는 구조다. 다만 ASL은 기업의 자발적 약속이며,
          사회적으로 합의된 법적 범주로 격상시키는 것이 ❶의 과제다.
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {aslSources.map((s, i) => (
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
