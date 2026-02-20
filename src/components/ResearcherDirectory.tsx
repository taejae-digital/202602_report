import { researchers, getPhotoPath } from '../data/researchers'
import { useState } from 'react'

interface Props {
  onResearcherClick: (id: string) => void
}

const categories = [
  { label: '전체', filter: () => true },
  {
    label: '진단 (현황)',
    filter: (id: string) => ['zuboff', 'piketty', 'harari', 'hinton', 'suleyman', 'perez'].includes(id),
  },
  {
    label: '❶ 주체 정의',
    filter: (id: string) => ['sandel', 'nussbaum', 'karatani', 'han', 'bengio', 'bostrom', 'russell', 'zuboff', 'crawford', 'hinton'].includes(id),
  },
  {
    label: '❷ 관계 정의',
    filter: (id: string) => ['lanier', 'crawford', 'bengio', 'nussbaum', 'floridi', 'russell'].includes(id),
  },
  {
    label: '❸ 질서 설계',
    filter: (id: string) => ['standing', 'piketty', 'saito', 'federici', 'suleyman', 'acemoglu', 'graylin', 'mazzucato', 'yuk-hui', 'van-parijs', 'sen', 'tang', 'sandel', 'lanier', 'nussbaum'].includes(id),
  },
]

export function ResearcherDirectory({ onResearcherClick }: Props) {
  const [activeFilter, setActiveFilter] = useState(0)
  const filtered = researchers.filter(r => categories[activeFilter].filter(r.id))

  return (
    <div className="section">
      <h2 className="section-title">연구자 프로필 ({researchers.length}명)</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
        {categories.map((cat, i) => (
          <button
            key={cat.label}
            onClick={() => setActiveFilter(i)}
            style={{
              padding: '6px 14px',
              borderRadius: 20,
              border: '1px solid',
              borderColor: i === activeFilter ? '#1e40af' : '#e7e5e4',
              background: i === activeFilter ? '#1e40af' : 'white',
              color: i === activeFilter ? 'white' : '#57534e',
              fontSize: 13,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.15s',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="researcher-grid">
        {filtered.map(r => (
          <div
            key={r.id}
            className="researcher-card-item"
            onClick={() => onResearcherClick(r.id)}
          >
            {r.photoUrl ? (
              <img className="photo" src={getPhotoPath(r.photoUrl)} alt={r.fullName} loading="lazy" />
            ) : (
              <div className="photo-placeholder" style={{ background: `linear-gradient(135deg, ${r.color}, ${r.color}cc)` }}>
                {r.fullName.split(' ').map(w => w[0]).join('').slice(0, 2)}
              </div>
            )}
            <div className="info">
              <h3>{r.fullName}</h3>
              <div className="korean-name">{r.koreanName}</div>
              <div className="affiliation">{r.affiliation}</div>
              <span className="relevance-tag">{r.relevance.split(',')[0]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
