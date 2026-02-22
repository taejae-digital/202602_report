import { useState, useCallback } from 'react'
import { getResearcherById } from '../data/researchers'
import { ResearcherPopup } from './ResearcherPopup'

interface Props {
  id: string
  displayText: string
}

export function ResearcherTag({ id, displayText }: Props) {
  const [open, setOpen] = useState(false)
  const researcher = getResearcherById(id)
  const handleClose = useCallback(() => setOpen(false), [])

  if (!researcher) return null

  return (
    <span style={{ display: 'inline-block' }}>
      <button
        className="researcher-tag"
        onClick={() => setOpen(o => !o)}
      >
        {displayText}
      </button>
      {open && <ResearcherPopup researcher={researcher} onClose={handleClose} />}
    </span>
  )
}
