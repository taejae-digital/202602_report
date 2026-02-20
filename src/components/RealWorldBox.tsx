interface Props {
  title: string
  children: React.ReactNode
}

export function RealWorldBox({ title, children }: Props) {
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
      </div>
      <div style={{ color: '#451a03' }}>{children}</div>
    </div>
  )
}
