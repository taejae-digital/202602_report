import { researchStages } from '../data/framework-data'
import { getResearcherById } from '../data/researchers'
import { ResearcherTag } from './ResearcherTag'

export function ResearchStrategy() {
  return (
    <div className="section">
      <h2 className="section-title">연구 전략</h2>

      <p style={{ marginBottom: 8 }}>
        세 단계의 연구는 순차적이되 병행한다. ❶❷는 기초가 되므로 먼저 착수하되,
        ❸은 ❶❷의 진행과 함께 병렬로 탐색한다.
      </p>
      <p style={{ marginBottom: 24, fontSize: 13, color: '#78716c' }}>
        ❶❷는 비교적 안정적인 기초다 — 법인이라는 범주가 산업 시대 전체를 관통한 것처럼,
        한 번 확립되면 상대적으로 오래간다. 반면 ❸은 본질적으로 적응적이다 —
        현실에 맞춰 계속 조정해야 한다.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
        {researchStages.map(stage => (
          <StageCard key={stage.id} stage={stage} />
        ))}
      </div>

      <div style={{
        marginTop: 8, padding: 20, background: '#f5f5f4',
        borderRadius: 12, fontSize: 14, color: '#78716c', marginBottom: 32,
      }}>
        <strong>파생적 변화 — 실무</strong>: 세부 입법, 파일럿 사업, 산업별 적용이라는
        방대한 실무가 따른다. 작업량은 가장 크지만, ❶❷❸이 제공하는 틀 위에서
        파생되는 작업이다.
      </div>

      <h3 className="section-subtitle">연구 일정</h3>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 12, marginTop: 12,
      }}>
        {[
          { period: '2026 상반기', task: '❶❷❸ 연구 리뷰 · 초안 설계' },
          { period: '7~8월', task: '국제 자문단 검증' },
          { period: '9~10월', task: '단행본 출간' },
          { period: '11~12월', task: '서울 컨퍼런스 개최' },
        ].map(item => (
          <div key={item.period} style={{
            padding: 16, background: 'white', borderRadius: 8, border: '1px solid #e7e5e4',
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#1e40af', marginBottom: 4 }}>
              {item.period}
            </div>
            <div style={{ fontSize: 13, color: '#57534e' }}>{item.task}</div>
          </div>
        ))}
      </div>

      <p style={{ marginTop: 20, fontSize: 13, color: '#78716c', fontStyle: 'italic' }}>
        본 보고서는 그 첫 단계 — 왜 이 연구가 필요한지, 어떤 경로로 진행하는지,
        기존 연구가 어디까지 와 있고 어디에 공백이 있는지 — 를 정리한 것이다.
        다음 단계에서는 각 영역의 구체적 설계안을 제시한다.
      </p>
    </div>
  )
}

function StageCard({ stage }: { stage: typeof researchStages[0] }) {
  return (
    <div style={{
      padding: 24, borderRadius: 12, border: '1px solid #e7e5e4', background: 'white',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
        <span style={{ fontSize: 20, fontWeight: 700, color: '#1e40af' }}>{stage.num}</span>
        <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>{stage.title}</h4>
        <span style={{ fontSize: 13, color: '#78716c' }}>— {stage.subtitle}</span>
        {stage.isAdaptive && (
          <span style={{
            fontSize: 10, padding: '2px 8px', borderRadius: 10,
            background: '#fef3c7', color: '#92400e', fontWeight: 600,
          }}>적응적</span>
        )}
      </div>

      <div style={{
        fontSize: 14, color: '#1e3a5f', fontWeight: 500, marginBottom: 12,
        padding: '8px 12px', background: '#f0f9ff', borderRadius: 8,
      }}>
        {stage.question}
      </div>

      <div style={{ fontSize: 13, marginBottom: 8 }}>
        <strong style={{ color: '#374151' }}>연구 방향:</strong>{' '}
        <span style={{ color: '#57534e' }}>{stage.direction}</span>
      </div>

      <div style={{ fontSize: 12, marginBottom: 12, color: '#a8a29e' }}>
        <strong>기존 논의:</strong> {stage.existing}
      </div>

      <div className="researchers-list">
        {stage.researchers.map(id => {
          const r = getResearcherById(id)
          return r ? (
            <ResearcherTag key={id} id={id} displayText={r.koreanName} />
          ) : null
        })}
      </div>
    </div>
  )
}
