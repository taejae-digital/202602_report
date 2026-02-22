const DOCX_PATH = 'downloads/AI시대_새로운_사회계약을_위한_기초연구.docx'
const SITE_ORIGIN = 'https://taejae-digital.github.io/202602_report/'

function getGoogleDocsUrl(): string {
  const docxUrl = encodeURIComponent(`${SITE_ORIGIN}${DOCX_PATH}`)
  return `https://docs.google.com/gview?url=${docxUrl}`
}

const btnBase = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  padding: '10px 20px',
  borderRadius: 8,
  fontSize: 13,
  fontWeight: 600,
  textDecoration: 'none',
  transition: 'background 0.2s',
} as const

export function DownloadLinks() {
  const base = import.meta.env.BASE_URL

  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
      <a
        href={getGoogleDocsUrl()}
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...btnBase, background: '#1a73e8', color: 'white' }}
        onMouseEnter={e => (e.currentTarget.style.background = '#1557b0')}
        onMouseLeave={e => (e.currentTarget.style.background = '#1a73e8')}
      >
        <span style={{ fontSize: 16 }}>&#128196;</span>
        <span>
          <span style={{ display: 'block' }}>Google Docs에서 열기</span>
          <span style={{ fontSize: 11, opacity: 0.8, fontWeight: 400 }}>브라우저에서 바로 보기</span>
        </span>
      </a>
      <a
        href={`${base}${DOCX_PATH}`}
        download
        style={{ ...btnBase, background: '#475569', color: 'white' }}
        onMouseEnter={e => (e.currentTarget.style.background = '#334155')}
        onMouseLeave={e => (e.currentTarget.style.background = '#475569')}
      >
        <span style={{ fontSize: 16 }}>&#8681;</span>
        <span>
          <span style={{ display: 'block' }}>DOCX 다운로드</span>
          <span style={{ fontSize: 11, opacity: 0.8, fontWeight: 400 }}>Word 파일 저장</span>
        </span>
      </a>
    </div>
  )
}
