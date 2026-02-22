import { DownloadLinks } from './DownloadLinks'

export function Header() {
  return (
    <header className="site-header">
      <h1>디지털 전환과 사회변혁</h1>
      <p className="subtitle">
        AI 시대 새로운 사회 계약을 위한 기초 연구
        <br />
        산업 시대: 큰 혼란과 파괴 끝에 황금기 진입 &nbsp;|&nbsp;
        AI 시대: 인간 통제를 벗어날 수 있는 최초의 기술 → 질서를 먼저 설계하여 황금기 진입
      </p>
      <p className="meta">
        태재미래전략연구원 디지털 전환과 사회변혁팀 &nbsp;|&nbsp; 2026. 2.
      </p>
      <DownloadLinks />
    </header>
  )
}
