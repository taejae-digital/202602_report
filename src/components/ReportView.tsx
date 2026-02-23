import { reportSections, reportSummary } from '../data/report-sections'
import { realWorldExamples, type RealWorldExample } from '../data/realworld-examples'
import { conceptAnnotations, type ConceptAnnotation } from '../data/concept-annotations'
import { LinkedText } from './LinkedText'
import { RealWorldBox } from './RealWorldBox'
import { ConceptBox } from './ConceptBox'
import { SpeakerDialogueGrid } from './SpeakerDialogueGrid'

const SECTION_LABELS = [
  '산업 시대.',
  'AI 시대.',
  '연구 리뷰: 분배.',
  '연구 리뷰: 거버넌스.',
  '연구 리뷰.',
  '연구 방향.',
]

function splitLabel(text: string): { label: string; body: string } | null {
  for (const prefix of SECTION_LABELS) {
    if (text.startsWith(prefix)) {
      return { label: prefix.replace(/\.$/, ''), body: text.slice(prefix.length).trim() }
    }
  }
  return null
}

const exampleMap = new Map<string, RealWorldExample[]>()
realWorldExamples.forEach(e => {
  const list = exampleMap.get(e.afterSection) || []
  list.push(e)
  exampleMap.set(e.afterSection, list)
})

const conceptMap = new Map<string, ConceptAnnotation[]>()
conceptAnnotations.forEach(c => {
  const list = conceptMap.get(c.afterSection) || []
  list.push(c)
  conceptMap.set(c.afterSection, list)
})

export function ReportView() {
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
            <LinkedText text={para} />
          </p>
        ))}
      </div>

      {reportSections.map(section => {
        const sectionExamples = exampleMap.get(section.id) || []
        return (
          <div key={section.id} id={`report-${section.id}`} style={{ marginBottom: 40 }}>
            <h3 className="section-subtitle">{section.title}</h3>
            <SpeakerDialogueGrid sectionId={section.id} />

            {section.subsections.map(sub => {
              const subExamples = exampleMap.get(sub.id) || []
              const subConcepts = conceptMap.get(sub.id) || []
              return (
                <div key={sub.id} style={{ marginBottom: 24 }}>
                  <h4 style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#374151',
                    marginBottom: 8,
                  }}>
                    {sub.title}
                  </h4>
                  {sub.paragraphs.map((para, i) => {
                    const split = splitLabel(para)
                    if (split) {
                      return (
                        <div key={i} style={{ marginBottom: 12 }}>
                          <div style={{
                            display: 'inline-block',
                            fontSize: 13,
                            fontWeight: 700,
                            color: '#1e3a5f',
                            background: '#e8eef4',
                            padding: '3px 10px',
                            borderRadius: 4,
                            marginBottom: 6,
                          }}>
                            {split.label}
                          </div>
                          <p style={{ margin: 0 }}>
                            <LinkedText text={split.body} />
                          </p>
                        </div>
                      )
                    }
                    return (
                      <p key={i}>
                        <LinkedText text={para} />
                      </p>
                    )
                  })}
                  {subConcepts.map((c, i) => (
                    <ConceptBox key={`concept-${i}`} term={c.term} source={c.source}>
                      {c.content}
                    </ConceptBox>
                  ))}
                  {subExamples.map((ex, i) => (
                    <RealWorldBox key={i} title={ex.title} url={ex.url}>
                      {ex.content}
                    </RealWorldBox>
                  ))}
                </div>
              )
            })}

            {(conceptMap.get(section.id) || []).map((c, i) => (
              <ConceptBox key={`section-concept-${i}`} term={c.term} source={c.source}>
                {c.content}
              </ConceptBox>
            ))}
            {sectionExamples.map((ex, i) => (
              <RealWorldBox key={i} title={ex.title} url={ex.url}>
                {ex.content}
              </RealWorldBox>
            ))}
          </div>
        )
      })}
    </div>
  )
}
