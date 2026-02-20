import { researchAreas } from '../data/framework-data'
import { getResearcherById } from '../data/researchers'

interface Props {
  onResearcherClick: (id: string) => void
}

export function ResearchStrategy({ onResearcherClick }: Props) {
  const critical = researchAreas.filter(a => a.priority === 'critical')
  const important = researchAreas.filter(a => a.priority === 'important')

  return (
    <div className="section">
      <h2 className="section-title">연구 전략</h2>

      <p>
        연구는 세 층위로 구성된다. 5%(결정적)는 전체 방향을 결정하는 원칙, 15%(중요)는
        구체적 질서와 거버넌스 설계, 80%(실무)는 파생되는 세부 입법과 산업별 적용이다.
      </p>

      <h3 className="section-subtitle">5% — 결정적 원칙</h3>
      <div className="research-areas">
        {critical.map(area => (
          <ResearchCard key={area.id} area={area} onResearcherClick={onResearcherClick} />
        ))}
      </div>

      <h3 className="section-subtitle">15% — 핵심 질서 설계</h3>
      <div className="research-areas">
        {important.map(area => (
          <ResearchCard key={area.id} area={area} onResearcherClick={onResearcherClick} />
        ))}
      </div>

      <div style={{
        marginTop: 24,
        padding: 20,
        background: '#f5f5f4',
        borderRadius: 12,
        fontSize: 14,
        color: '#78716c',
      }}>
        <strong>80% — 실무 파생</strong>: 세부 입법, 파일럿 사업, 산업별 적용, 적응적 조정.
        ❶❷❸의 원칙이 확립된 후 구현.
      </div>

      <h3 className="section-subtitle" style={{ marginTop: 32 }}>연구 일정</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 12,
        marginTop: 12,
      }}>
        {[
          { period: '2026 상반기', task: '❶❷❸ 연구 리뷰 · 초안 설계' },
          { period: '7~8월', task: '국제 자문단 검증' },
          { period: '9~10월', task: '단행본 출간' },
          { period: '11~12월', task: '서울 컨퍼런스 개최' },
        ].map(item => (
          <div key={item.period} style={{
            padding: 16,
            background: 'white',
            borderRadius: 8,
            border: '1px solid #e7e5e4',
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#1e40af', marginBottom: 4 }}>
              {item.period}
            </div>
            <div style={{ fontSize: 13, color: '#57534e' }}>{item.task}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ResearchCard({
  area,
  onResearcherClick,
}: {
  area: typeof researchAreas[0]
  onResearcherClick: (id: string) => void
}) {
  return (
    <div className="research-card">
      <span className={`priority priority-${area.priority === 'critical' ? 'critical' : 'important'}`}>
        {area.priorityLabel}
      </span>
      <h4>{area.title}</h4>
      <p style={{ fontSize: 13, color: '#78716c', margin: '4px 0' }}>{area.topic}</p>
      <p style={{ fontSize: 12, color: '#a8a29e', margin: '4px 0' }}>
        방향: {area.direction}
      </p>
      {area.lead && (
        <p style={{ fontSize: 12, color: '#1e40af', margin: '4px 0' }}>
          담당: {area.lead}
        </p>
      )}
      <div className="researchers-list">
        {area.researchers.map(id => {
          const r = getResearcherById(id)
          return r ? (
            <button
              key={id}
              className="researcher-tag"
              onClick={() => onResearcherClick(id)}
            >
              {r.koreanName}
            </button>
          ) : null
        })}
      </div>
    </div>
  )
}
