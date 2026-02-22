import { experiments, keyInsight, democraticSources } from '../data/democratic-ai-data'

function ExperimentCard({ exp }: { exp: typeof experiments[0] }) {
  return (
    <div style={{
      background: exp.highlight
        ? 'linear-gradient(135deg, #ecfdf5, #d1fae5)'
        : 'var(--color-surface)',
      border: exp.highlight
        ? '2px solid #059669'
        : '1px solid var(--color-border)',
      borderRadius: 10,
      padding: '16px 20px',
      marginBottom: 12,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text)' }}>
          {exp.name}
        </span>
        <span style={{
          fontSize: 11,
          color: '#6b7280',
          background: 'rgba(0,0,0,0.06)',
          borderRadius: 4,
          padding: '2px 8px',
        }}>
          {exp.year}
        </span>
        <span style={{
          fontSize: 11,
          fontWeight: 600,
          color: exp.binding ? '#059669' : '#d97706',
          background: exp.binding ? '#ecfdf5' : '#fffbeb',
          border: `1px solid ${exp.binding ? '#a7f3d0' : '#fde68a'}`,
          borderRadius: 4,
          padding: '2px 8px',
        }}>
          {exp.binding ? '구속력 있음' : '자문적'}
        </span>
        <span style={{
          fontSize: 12,
          color: 'var(--color-text-muted)',
          marginLeft: 'auto',
        }}>
          {exp.participants}
        </span>
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: 6 }}>
        <strong style={{ color: 'var(--color-text)' }}>방법:</strong> {exp.method}
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
        <strong style={{ color: 'var(--color-text)' }}>결과:</strong> {exp.outcome}
      </div>
    </div>
  )
}

export function DemocraticAIView() {
  return (
    <div className="section">
      <h2 className="section-title">AI 거버넌스의 민주화</h2>

      <div style={{
        background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
        borderRadius: 12,
        padding: '16px 20px',
        marginBottom: 24,
        borderLeft: '4px solid #f59e0b',
      }}>
        <div style={{ fontSize: 14, lineHeight: 1.7, color: '#78350f' }}>
          AI 안전 프레임워크를 <strong>누가 설계하는가</strong>는
          <strong> 무엇을 설계하는가</strong>만큼 중요하다.
          현재 ASL(Anthropic), Preparedness(OpenAI), EU AI Act 등
          AI 거버넌스는 기업이나 정부가 일방적으로 결정하는 구조다.
          산업 시대의 황금기가 <strong>단체교섭</strong>이라는
          협상 구조 위에서 왔다는 점은, AI 시대에도 시민의 실질적
          참여 메커니즘이 필요함을 시사한다.
        </div>
      </div>

      {experiments.map(exp => (
        <ExperimentCard key={exp.id} exp={exp} />
      ))}

      <div style={{
        background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
        borderRadius: 12,
        padding: '16px 20px',
        marginTop: 20,
        marginBottom: 24,
        borderLeft: '4px solid #2563eb',
      }}>
        <div style={{ fontSize: 14, lineHeight: 1.7, color: '#1e3a5f' }}>
          <strong>핵심 발견:</strong> {keyInsight}
        </div>
      </div>

      <div style={{
        background: 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
        borderRadius: 12,
        padding: '16px 20px',
        marginBottom: 24,
        borderLeft: '4px solid #7c3aed',
      }}>
        <div style={{ fontSize: 14, lineHeight: 1.7, color: '#3b0764' }}>
          <strong>본 연구의 방향:</strong> ❸ 질서 설계의 거버넌스 축에서,
          하향식 규제(EU)와 자율 규제(미국)의 한계를 넘어
          시민 참여가 내장된 거버넌스 구조를 모색한다.
          vTaiwan의 Pol.is 모델과 하버마스 머신이 보여준 것처럼,
          AI 자체가 대규모 숙의를 가능하게 하는 도구가 될 수 있다.
          랑드모어(2024)가 제안하는 &lsquo;열린 미니 공중&rsquo; —
          무작위 선발된 시민이 AI 정책을 정의하는 구조 —
          을 한국의 맥락에서 설계하는 것이 연구 과제다.
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
          {democraticSources.map((s, i) => (
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
