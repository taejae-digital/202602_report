import { useState, useCallback } from 'react'
import { getResearcherById } from '../data/researchers'
import { ResearcherPopup } from './ResearcherPopup'

interface Props {
  id: string
  displayText: string
}

export function ResearcherInlineLink({ id, displayText }: Props) {
  const [open, setOpen] = useState(false)
  const researcher = getResearcherById(id)

  const handleClose = useCallback(() => setOpen(false), [])

  if (!researcher) {
    return <span>{displayText}</span>
  }

  return (
    <>
      <button
        className="researcher-link"
        onClick={() => setOpen(o => !o)}
      >
        {displayText}
      </button>
      {open && <ResearcherPopup researcher={researcher} onClose={handleClose} />}
    </>
  )
}
