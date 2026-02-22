import { getDialogueBySectionId } from '../data/dialogue-speakers'
import { SpeakerCard } from './SpeakerCard'

interface Props {
  sectionId: string
}

export function SpeakerDialogueGrid({ sectionId }: Props) {
  const dialogue = getDialogueBySectionId(sectionId)
  if (!dialogue) return null

  return (
    <div
      className="dialogue-grid"
      style={{
        background: 'linear-gradient(180deg, #0f1930, #192640)',
        borderRadius: 12,
        padding: 20,
        marginBottom: 24,
      }}
    >
      {dialogue.speakers.map((speaker) => (
        <SpeakerCard key={speaker.photoFile} speaker={speaker} />
      ))}
    </div>
  )
}
