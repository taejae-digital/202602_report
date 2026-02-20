interface NavProps {
  isOpen: boolean
  onClose: () => void
}

const sections = [
  { id: 'framework', label: '페레즈 사이클 프레임워크', group: '시각화' },
  { id: 'report', label: '보고서 전문', group: '보고서' },
  { id: 'report-sec-1', label: '1. 기술 혁명은 왜 위험한가', group: '보고서', indent: true },
  { id: 'report-sec-2', label: '2. 산업 시대의 질서 형성', group: '보고서', indent: true },
  { id: 'report-sec-3', label: '3. AI 시대: 왜 다른가', group: '보고서', indent: true },
  { id: 'report-sec-4', label: '4. 세 단계의 경로', group: '보고서', indent: true },
  { id: 'report-sec-5', label: '5. 무엇을 위한 설계인가', group: '보고서', indent: true },
  { id: 'strategy', label: '연구 전략', group: '연구' },
  { id: 'declaration', label: '인간 선언 (초안)', group: '연구' },
  { id: 'researchers', label: '연구자 프로필', group: '디렉토리' },
]

export function Nav({ isOpen, onClose }: NavProps) {
  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    onClose()
  }

  let lastGroup = ''

  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h1>AI 시대<br />새로운 사회 계약</h1>
        <p>태재미래전략연구원 | 2026</p>
      </div>

      {sections.map(s => {
        const showGroup = s.group !== lastGroup
        lastGroup = s.group
        return (
          <div key={s.id}>
            {showGroup && (
              <div className="nav-section">
                <div className="nav-section-title">{s.group}</div>
              </div>
            )}
            <button
              className="nav-item"
              onClick={() => handleClick(s.id)}
              style={s.indent ? { paddingLeft: 32, fontSize: 12, opacity: 0.7 } : undefined}
            >
              {s.label}
            </button>
          </div>
        )
      })}
    </nav>
  )
}
