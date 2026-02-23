import { useState, useCallback } from 'react'
import { conceptAnnotations } from '../data/concept-annotations'
import { ConceptPopup } from './ConceptPopup'

interface Props {
  index: number
  displayText: string
}

export function ConceptInlineLink({ index, displayText }: Props) {
  const [open, setOpen] = useState(false)
  const concept = conceptAnnotations[index]
  const handleClose = useCallback(() => setOpen(false), [])

  if (!concept) {
    return <span>{displayText}</span>
  }

  return (
    <>
      <button
        className="concept-link"
        onClick={() => setOpen(o => !o)}
      >
        {displayText}
      </button>
      {open && (
        <ConceptPopup
          term={concept.term}
          content={concept.content}
          source={concept.source}
          onClose={handleClose}
        />
      )}
    </>
  )
}
