import { useState } from 'react'

interface Props {
  term: string
  children: React.ReactNode
  source?: string
}

export function ConceptBox({ term, children, source }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{
      margin: '16px 0',
      background: open
        ? 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)'
        : '#eef2ff',
      borderRadius: 12,
      borderLeft: '4px solid #6366f1',
      overflow: 'hidden',
      transition: 'background 0.2s',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          width: '100%',
          padding: '12px 16px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          fontSize: 13,
          color: '#312e81',
        }}
      >
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
        <span style={{ fontWeight: 600, flex: 1 }}>{term}</span>
        <span style={{
          fontSize: 12,
          transition: 'transform 0.2s',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          flexShrink: 0,
        }}>
          ▼
        </span>
      </button>

      {open && (
        <div style={{
          padding: '0 16px 14px',
          fontSize: 13,
          lineHeight: 1.8,
          color: '#312e81',
        }}>
          <div>{children}</div>
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: 6,
                fontSize: 11,
                color: '#4f46e5',
                textDecoration: 'underline',
              }}
            >
              [출처]
            </a>
          )}
        </div>
      )}
    </div>
  )
}
