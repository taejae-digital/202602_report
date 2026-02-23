import { useState, useCallback, useEffect, useSyncExternalStore } from 'react'
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
import { DemocraticAIView } from './components/DemocraticAIView'
import { BookView } from './components/BookView'

export type SectionId = 'framework' | 'report' | 'scenarios' | 'agent-era' | 'strategy' | 'declaration' | 'researchers' | 'youth-crisis' | 'asl' | 'democratic-ai' | 'references'

export type AppView = 'report' | 'the_synergy_book'

const DEFAULT_VIEW: AppView = (import.meta.env.VITE_DEFAULT_VIEW as AppView) || 'report'

function getHashView(): AppView {
  if (window.location.hash === '#the_synergy_book') return 'the_synergy_book'
  if (window.location.hash === '#report' || window.location.hash === '#') return 'report'
  return DEFAULT_VIEW
}

function useHashView(): AppView {
  return useSyncExternalStore(
    (cb) => {
      window.addEventListener('hashchange', cb)
      return () => window.removeEventListener('hashchange', cb)
    },
    getHashView,
  )
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const closeSidebar = useCallback(() => setSidebarOpen(false), [])
  const view = useHashView()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [view])

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

      <Nav isOpen={sidebarOpen} onClose={closeSidebar} currentView={view} />

      <main className="main-content">
        {view === 'the_synergy_book' ? (
          <>
            <Header />
            <BookView />
          </>
        ) : (
          <>
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

            <section id="democratic-ai">
              <DemocraticAIView />
            </section>

            <section id="references">
              <References />
            </section>
          </>
        )}
      </main>
    </div>
  )
}
