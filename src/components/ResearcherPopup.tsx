import { useEffect, useRef } from 'react'
import { Researcher, getPhotoPath } from '../data/researchers'

interface Props {
  researcher: Researcher
  onClose: () => void
}

export function ResearcherPopup({ researcher, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', keyHandler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', keyHandler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const photoSrc = researcher.photoUrl ? getPhotoPath(researcher.photoUrl) : ''
  const initials = researcher.fullName.split(' ').map(w => w[0]).join('').slice(0, 2)

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.3)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
      onClick={onClose}
    >
      <div
        ref={ref}
        onClick={e => e.stopPropagation()}
        style={{
          width: 360,
          maxWidth: '100%',
          maxHeight: '80vh',
          background: 'white',
          borderRadius: 12,
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <div style={{ display: 'flex', gap: 12, padding: 16, alignItems: 'center', flexShrink: 0 }}>
          {photoSrc ? (
            <img
              src={photoSrc}
              alt={researcher.fullName}
              style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
            />
          ) : (
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: `linear-gradient(135deg, ${researcher.color}, ${researcher.color}cc)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, color: 'white', fontWeight: 700, flexShrink: 0,
            }}>
              {initials}
            </div>
          )}
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#1f2937' }}>{researcher.fullName}</div>
            <div style={{ fontSize: 13, color: '#6b7280' }}>{researcher.koreanName}</div>
            <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>{researcher.affiliation}</div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none', border: 'none', fontSize: 18, cursor: 'pointer',
              color: '#9ca3af', padding: 4, lineHeight: 1, flexShrink: 0,
            }}
          >
            &#x2715;
          </button>
        </div>

        <div style={{ overflowY: 'auto', flex: 1, minHeight: 0 }}>
          <div style={{ padding: '0 16px 12px', fontSize: 13, lineHeight: 1.6, color: '#4b5563' }}>
            {researcher.bio}
          </div>

          <div style={{
            padding: '8px 16px 12px', fontSize: 12, color: '#1e40af',
            background: '#f0f9ff', borderTop: '1px solid #e5e7eb',
          }}>
            <strong>본 연구:</strong> {researcher.relevance}
          </div>

          {researcher.keyWorks.length > 0 && (
            <div style={{ padding: '8px 16px 12px', borderTop: '1px solid #f3f4f6', fontSize: 12 }}>
              <strong style={{ color: '#374151' }}>주요 저서</strong>
              {researcher.keyWorks.map((w, i) => (
                <div key={i} style={{ color: '#6b7280', marginTop: 4 }}>
                  <em>{w.title}</em> ({w.year})
                </div>
              ))}
            </div>
          )}

          {researcher.wikipediaUrl && (
            <div style={{ padding: '8px 16px 12px', borderTop: '1px solid #f3f4f6' }}>
              <a
                href={researcher.wikipediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 12, color: '#2563eb', textDecoration: 'none' }}
              >
                Wikipedia &rarr;
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
