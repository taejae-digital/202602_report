import { agentEraCategories, agentEraConclusion } from '../data/agent-era-changes'
import { AgentEraCategoryCard } from './AgentEraCategoryCard'

export function AgentEraChanges() {
  return (
    <div className="section">
      <h2 className="section-title">에이전트 시대의 일상</h2>
      <p style={{ marginBottom: 32 }}>
        AI 에이전트는 우리 일상의 8개 영역을 근본적으로 바꾸고 있습니다.
        각 영역에서 "지금"과 "에이전트 시대"를 비교하며, 변화의 방향과 속도를 확인합니다.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: 20,
      }}>
        {agentEraCategories.map((category, i) => (
          <AgentEraCategoryCard key={category.id} category={category} index={i} />
        ))}
      </div>

      <div style={{
        marginTop: 40,
        padding: 28,
        background: 'linear-gradient(135deg, #0f172a, #1e3a5f)',
        borderRadius: 16,
        color: 'white',
      }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12 }}>
          관통하는 패턴
        </h3>
        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: '#e2e8f0',
          margin: 0,
        }}>
          {agentEraConclusion}
        </p>
      </div>
    </div>
  )
}
