import { useEffect } from 'react'
import { getResearcherById, getPhotoPath } from '../data/researchers'

interface Props {
  researcherId: string
  onClose: () => void
}

export function ResearcherModal({ researcherId, onClose }: Props) {
  const researcher = getResearcherById(researcherId)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!researcher) return null

  const initials = researcher.fullName
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
        style={{ position: 'relative' }}
      >
        <button className="modal-close" onClick={onClose}>
          &#x2715;
        </button>

        {researcher.photoUrl ? (
          <img className="modal-photo" src={getPhotoPath(researcher.photoUrl)} alt={researcher.fullName} />
        ) : (
          <div
            className="modal-photo-placeholder"
            style={{ background: `linear-gradient(135deg, ${researcher.color}, ${researcher.color}99)` }}
          >
            {initials}
          </div>
        )}

        <div className="modal-body">
          <h2>{researcher.fullName}</h2>
          <div className="korean-name">{researcher.koreanName}</div>
          <div className="title-affiliation">
            {researcher.title}
            <br />
            {researcher.affiliation}
          </div>

          <p className="bio">{researcher.bio}</p>

          <div className="key-works">
            <h4>주요 저서</h4>
            {researcher.keyWorks.map((work, i) => (
              <div key={i} className="work-item">
                <em>{work.title}</em> ({work.year})
              </div>
            ))}
          </div>

          <div className="relevance-section">
            <strong>본 연구에서의 역할:</strong> {researcher.relevance}
          </div>

          <div className="links">
            {researcher.wikipediaUrl && (
              <a href={researcher.wikipediaUrl} target="_blank" rel="noopener noreferrer">
                Wikipedia
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
