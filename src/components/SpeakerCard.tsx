import type { DialogueSpeaker } from '../data/dialogue-speakers'

interface Props {
  speaker: DialogueSpeaker
}

export function SpeakerCard({ speaker }: Props) {
  const photoSrc = `${import.meta.env.BASE_URL}images/researchers/${speaker.photoFile}`

  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      {/* Avatar + Name */}
      <div style={{ flexShrink: 0, textAlign: 'center', width: 68 }}>
        <img
          src={photoSrc}
          alt={speaker.nameKr}
          style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid rgba(160,175,200,0.4)',
          }}
          loading="lazy"
        />
        <div style={{ marginTop: 6 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#c8d2e6', lineHeight: 1.3 }}>
            {speaker.nameKr}
          </div>
          <div style={{ fontSize: 9, color: '#8c9baf', lineHeight: 1.3 }}>
            {speaker.nameEn}
          </div>
        </div>
      </div>

      {/* Speech bubble */}
      <div style={{ position: 'relative', flex: 1, minWidth: 0 }}>
        {/* Tail */}
        <div style={{
          position: 'absolute',
          left: -6,
          top: 16,
          width: 0,
          height: 0,
          borderTop: '6px solid transparent',
          borderBottom: '6px solid transparent',
          borderRight: '6px solid rgba(160,175,200,0.55)',
        }} />
        <div style={{
          position: 'absolute',
          left: -5,
          top: 16,
          width: 0,
          height: 0,
          borderTop: '6px solid transparent',
          borderBottom: '6px solid transparent',
          borderRight: '6px solid rgba(240,243,250,0.88)',
        }} />

        {/* Bubble */}
        <div style={{
          background: 'rgba(240,243,250,0.88)',
          border: '1px solid rgba(160,175,200,0.55)',
          borderRadius: 14,
          padding: '12px 14px',
        }}>
          <div style={{
            fontSize: 13,
            fontWeight: 600,
            color: '#1e2840',
            lineHeight: 1.6,
          }}>
            {speaker.lines.join(' ')}
          </div>
          {speaker.attribution && (
            <div style={{ fontSize: 11, color: '#64738c', marginTop: 4 }}>
              {speaker.attribution}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
