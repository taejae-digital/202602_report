interface Props {
  title: string
  children: React.ReactNode
  url?: string
}

export function RealWorldBox({ title, children, url }: Props) {
  return (
    <div style={{
      margin: '20px 0',
      padding: '16px 20px',
      background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
      borderRadius: 12,
      borderLeft: '4px solid #f59e0b',
      fontSize: 13.5,
      lineHeight: 1.8,
      color: '#78350f',
    }}>
      <div style={{
        fontSize: 13,
        fontWeight: 700,
        marginBottom: 8,
        color: '#92400e',
      }}>
        {title}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: 8,
              fontSize: 11,
              fontWeight: 500,
              color: '#b45309',
              textDecoration: 'underline',
            }}
          >
            [출처]
          </a>
        )}
      </div>
      <div style={{ color: '#451a03' }}>{children}</div>
    </div>
  )
}
