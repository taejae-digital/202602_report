import { futureScenarios } from '../data/future-scenarios'
import { ScaleChanges } from './ScaleChanges'
import { ClassChanges } from './ClassChanges'

export function FutureScenarios() {
  const base = import.meta.env.BASE_URL

  return (
    <div className="section">
      <h2 className="section-title">미래 시나리오</h2>
      <p style={{ marginBottom: 32 }}>
        기술 혁명의 결과는 기술이 아니라 제도적 선택에 달려 있습니다.
        가까운 미래에 펼쳐질 두 장면을 살펴보고, 왜 지금 준비가 필요한지 확인합니다.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
        {futureScenarios.map(scenario => (
          <ScenarioCard key={scenario.id} scenario={scenario} baseUrl={base} />
        ))}
      </div>

      <ConnectionBox />
    </div>
  )
}

function ScenarioCard({
  scenario,
  baseUrl,
}: {
  scenario: typeof futureScenarios[0]
  baseUrl: string
}) {
  const yearColor = scenario.year === 2027 ? '#1e40af' : '#9333ea'
  const yearBg = scenario.year === 2027 ? '#eff6ff' : '#faf5ff'

  return (
    <div id={scenario.id} style={{
      background: 'white',
      borderRadius: 16,
      border: '1px solid #e7e5e4',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '21/9',
        background: `linear-gradient(135deg, ${yearColor}22, ${yearColor}44)`,
        overflow: 'hidden',
      }}>
        {scenario.imageFile && (
          <img
            src={`${baseUrl}images/scenarios/${scenario.imageFile}`}
            alt={scenario.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        )}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '40px 32px 24px',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
          color: 'white',
        }}>
          <span style={{
            fontSize: 14,
            fontWeight: 700,
            padding: '4px 12px',
            background: yearColor,
            borderRadius: 20,
            marginBottom: 8,
            display: 'inline-block',
          }}>
            {scenario.year}년
          </span>
          <h3 style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
            fontWeight: 700,
            marginTop: 8,
          }}>
            {scenario.title}
          </h3>
        </div>
      </div>

      <div style={{ padding: '24px 32px 32px' }}>
        <p style={{
          fontSize: 15,
          lineHeight: 1.8,
          color: '#374151',
          marginBottom: 24,
          padding: 20,
          background: yearBg,
          borderRadius: 12,
          borderLeft: `4px solid ${yearColor}`,
        }}>
          {scenario.intro}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {scenario.sections.map((section, i) => {
            const isWarning = section.title.includes('문제')
            return (
              <div key={i} style={{
                padding: 20,
                borderRadius: 12,
                background: isWarning ? '#fef2f2' : '#f9fafb',
                border: isWarning ? '1px solid #fecaca' : '1px solid #f3f4f6',
              }}>
                <h4 style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: isWarning ? '#dc2626' : yearColor,
                  marginBottom: 8,
                }}>
                  {section.title}
                </h4>
                <p style={{
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: '#4b5563',
                  margin: 0,
                }}>
                  {section.content}
                </p>
              </div>
            )
          })}
        </div>

        <ScaleChanges changes={scenario.scaleChanges} color={yearColor} />
        <ClassChanges changes={scenario.classChanges} color={yearColor} />

        <p style={{
          marginTop: 24,
          fontSize: 14,
          lineHeight: 1.7,
          color: '#6b7280',
          fontStyle: 'italic',
          padding: '16px 20px',
          background: '#f5f5f4',
          borderRadius: 8,
        }}>
          {scenario.conclusion}
        </p>
      </div>
    </div>
  )
}

function ConnectionBox() {
  const steps = [
    {
      num: '1',
      label: '주체 정의',
      desc: 'AI 에이전트에게 법적 지위를 부여',
      from: '2027 시나리오',
      color: '#1e40af',
    },
    {
      num: '2',
      label: '관계 정의',
      desc: '사람과 AI 사이의 책임 관계 확립',
      from: '2027 시나리오',
      color: '#1e40af',
    },
    {
      num: '3',
      label: '질서 설계',
      desc: '새로운 분배 질서의 조건 설계',
      from: '2030 시나리오',
      color: '#9333ea',
    },
  ]

  return (
    <div style={{
      marginTop: 40,
      padding: 28,
      background: 'linear-gradient(135deg, #0f172a, #1e3a5f)',
      borderRadius: 16,
      color: 'white',
    }}>
      <h3 style={{
        fontSize: '1.1rem',
        fontWeight: 700,
        marginBottom: 8,
      }}>
        왜 지금 준비해야 하는가
      </h3>
      <p style={{
        fontSize: 15,
        color: '#e2e8f0',
        marginBottom: 20,
        lineHeight: 1.8,
      }}>
        위 시나리오는 먼 미래가 아닙니다. 1~5년 안에 현실이 됩니다.
        기술이 사회를 바꾸기 전에, 사회가 기술을 담을 그릇을 준비해야 합니다.
        본 연구의 세 단계가 그 그릇입니다.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 12,
      }}>
        {steps.map(step => (
          <div key={step.num} style={{
            padding: 16,
            background: 'rgba(255,255,255,0.1)',
            borderRadius: 10,
          }}>
            <div style={{
              fontSize: 11,
              opacity: 0.6,
              marginBottom: 4,
            }}>
              {step.from}에서
            </div>
            <div style={{
              fontSize: 18,
              fontWeight: 700,
              marginBottom: 4,
            }}>
              {step.num === '1' ? '\u2776' : step.num === '2' ? '\u2777' : '\u2778'}{' '}{step.label}
            </div>
            <div style={{ fontSize: 13, opacity: 0.8 }}>
              {step.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
