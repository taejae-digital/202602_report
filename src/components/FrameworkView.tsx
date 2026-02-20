import { frameworkPhases } from '../data/framework-data'

interface Props {
  onResearcherClick: (id: string) => void
}

export function FrameworkView({ onResearcherClick }: Props) {
  return (
    <div className="section">
      <h2 className="section-title">페레즈 사이클 프레임워크</h2>
      <p>
        카를로타{' '}
        <button className="researcher-link" onClick={() => onResearcherClick('perez')}>
          페레즈
        </button>
        (2002)의 기술혁명 사이클 이론을 산업 시대와 AI 시대에 적용한 비교 프레임워크.
      </p>

      <div className="framework-grid">
        {frameworkPhases.map(phase => (
          <div key={phase.id} className={`framework-card ${phase.phaseClass}`}>
            <span className="phase-label">{phase.phase}</span>
            {phase.status && (
              <span style={{
                marginLeft: 8,
                fontSize: 11,
                color: '#dc2626',
                fontWeight: 700,
              }}>
                {phase.status}
              </span>
            )}
            <h3>{phase.phaseKr}</h3>

            <div className="comparison">
              <div className="comparison-col industrial">
                <div className="label">산업 시대</div>
                {phase.industrial.split('\n').map((line, i) => (
                  <p key={i} style={{ margin: '4px 0' }}>{line}</p>
                ))}
              </div>
              <div className="comparison-col digital">
                <div className="label">AI 시대 (디지털 전환)</div>
                {phase.digital.split('\n').map((line, i) => (
                  <p key={i} style={{ margin: '4px 0' }}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 32,
        padding: 24,
        background: '#fffbeb',
        borderRadius: 12,
        border: '1px solid #fde68a',
      }}>
        <h3 style={{ fontSize: '1rem', marginBottom: 8 }}>
          목표: 경로를 유연하게 설계한다
        </h3>
        <p style={{ fontSize: 14, color: '#78716c', margin: 0 }}>
          → 질서 자체가 아니라 <strong>질서가 작동할 조건</strong>을 설계.
          보이지 않는 손을 대체하는 것이 아니라, 보이지 않는 손이 작동할 울타리를 미리 치는 것.
        </p>
      </div>
    </div>
  )
}
