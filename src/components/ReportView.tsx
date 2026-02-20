import { reportSections, reportSummary } from '../data/report-sections'
import { LinkedText } from './LinkedText'

interface Props {
  onResearcherClick: (id: string) => void
}

export function ReportView({ onResearcherClick }: Props) {
  return (
    <div className="section">
      <h2 className="section-title">보고서 전문</h2>

      <div style={{
        background: '#f0f9ff',
        padding: 24,
        borderRadius: 12,
        marginBottom: 32,
        borderLeft: '4px solid #2563eb',
      }}>
        <h3 style={{ fontSize: '0.95rem', marginBottom: 12, color: '#1e40af' }}>요약</h3>
        {reportSummary.split('\n\n').map((para, i) => (
          <p key={i} style={{ fontSize: 14, marginBottom: 8, color: '#475569' }}>
            <LinkedText text={para} onResearcherClick={onResearcherClick} />
          </p>
        ))}
      </div>

      {reportSections.map(section => (
        <div key={section.id} id={`report-${section.id}`} style={{ marginBottom: 40 }}>
          <h3 className="section-subtitle">{section.title}</h3>

          {section.subsections.map(sub => (
            <div key={sub.id} style={{ marginBottom: 24 }}>
              <h4 style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#374151',
                marginBottom: 8,
              }}>
                {sub.title}
              </h4>
              {sub.paragraphs.map((para, i) => (
                <p key={i}>
                  <LinkedText text={para} onResearcherClick={onResearcherClick} />
                </p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
