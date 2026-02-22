import { useState, useCallback } from 'react'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { FrameworkView } from './components/FrameworkView'
import { ReportView } from './components/ReportView'
import { ResearchStrategy } from './components/ResearchStrategy'
import { DeclarationView } from './components/DeclarationView'
import { ResearcherDirectory } from './components/ResearcherDirectory'
import { FutureScenarios } from './components/FutureScenarios'
import { AgentEraChanges } from './components/AgentEraChanges'
import { References } from './components/References'
import { YouthCrisisView } from './components/YouthCrisisView'
import { ASLView } from './components/ASLView'

export type SectionId = 'framework' | 'report' | 'scenarios' | 'agent-era' | 'strategy' | 'declaration' | 'researchers' | 'youth-crisis' | 'asl' | 'references'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
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
          <FrameworkView />
        </section>

        <section id="report">
          <ReportView />
        </section>

        <section id="scenarios">
          <FutureScenarios />
        </section>

        <section id="agent-era">
          <AgentEraChanges />
        </section>

        <section id="strategy">
          <ResearchStrategy />
        </section>

        <section id="declaration">
          <DeclarationView />
        </section>

        <section id="researchers">
          <ResearcherDirectory />
        </section>

        <section id="youth-crisis">
          <YouthCrisisView />
        </section>

        <section id="asl">
          <ASLView />
        </section>

        <section id="references">
          <References />
        </section>

      </main>
    </div>
  )
}
