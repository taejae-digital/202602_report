import { useEffect } from 'react'

interface Props {
  term: string
  content: string
  source?: string
  onClose: () => void
}

export function ConceptPopup({ term, content, source, onClose }: Props) {
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
        onClick={e => e.stopPropagation()}
        style={{
          width: 420,
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
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '14px 16px',
          borderBottom: '1px solid #e5e7eb',
          flexShrink: 0,
        }}>
          <span style={{
            fontSize: 11,
            fontWeight: 700,
            background: '#6366f1',
            color: '#fff',
            padding: '2px 8px',
            borderRadius: 4,
            flexShrink: 0,
          }}>
            학술 배경
          </span>
          <span style={{
            fontSize: 15,
            fontWeight: 700,
            color: '#1f2937',
            flex: 1,
            minWidth: 0,
          }}>
            {term}
          </span>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 18,
              cursor: 'pointer',
              color: '#9ca3af',
              padding: 4,
              lineHeight: 1,
              flexShrink: 0,
            }}
          >
            &#x2715;
          </button>
        </div>

        <div style={{ overflowY: 'auto', flex: 1, minHeight: 0 }}>
          <div style={{
            padding: '14px 16px',
            fontSize: 13,
            lineHeight: 1.8,
            color: '#312e81',
          }}>
            {content.split('\n\n').map((para, i) => (
              <p key={i} style={{ margin: i > 0 ? '10px 0 0' : 0 }}>{para}</p>
            ))}
          </div>

          {source && (
            <div style={{
              padding: '8px 16px 14px',
              borderTop: '1px solid #f3f4f6',
            }}>
              <a
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 12,
                  color: '#4f46e5',
                  textDecoration: 'none',
                  borderBottom: '1px dotted #4f46e5',
                }}
              >
                출처 &rarr;
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
