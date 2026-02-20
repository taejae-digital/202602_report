import { useState, useCallback } from 'react'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { FrameworkView } from './components/FrameworkView'
import { ReportView } from './components/ReportView'
import { ResearchStrategy } from './components/ResearchStrategy'
import { DeclarationView } from './components/DeclarationView'
import { ResearcherDirectory } from './components/ResearcherDirectory'
import { ResearcherModal } from './components/ResearcherModal'
import { TtsPlayer } from './components/TtsPlayer'

export type SectionId = 'framework' | 'report' | 'strategy' | 'declaration' | 'researchers'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedResearcher, setSelectedResearcher] = useState<string | null>(null)

  const handleResearcherClick = useCallback((id: string) => {
    setSelectedResearcher(id)
  }, [])

  const closeSidebar = useCallback(() => setSidebarOpen(false), [])

  return (
    <div className="app-layout">
      <button
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(o => !o)}
        aria-label="메뉴 열기"
      >
        {sidebarOpen ? '\u2715' : '\u2630'}
      </button>

      <div
        className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
        onClick={closeSidebar}
      />

      <Nav isOpen={sidebarOpen} onClose={closeSidebar} />

      <main className="main-content">
        <Header />

        <section id="framework">
          <FrameworkView onResearcherClick={handleResearcherClick} />
        </section>

        <section id="report">
          <ReportView onResearcherClick={handleResearcherClick} />
        </section>

        <section id="strategy">
          <ResearchStrategy onResearcherClick={handleResearcherClick} />
        </section>

        <section id="declaration">
          <DeclarationView onResearcherClick={handleResearcherClick} />
        </section>

        <section id="researchers">
          <ResearcherDirectory onResearcherClick={handleResearcherClick} />
        </section>

        <div style={{ height: 80 }} />
      </main>

      <TtsPlayer />

      {selectedResearcher && (
        <ResearcherModal
          researcherId={selectedResearcher}
          onClose={() => setSelectedResearcher(null)}
        />
      )}
    </div>
  )
}
