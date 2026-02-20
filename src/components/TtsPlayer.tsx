import { useState, useEffect, useRef, useCallback } from 'react'
import { reportSections, reportSummary } from '../data/report-sections'

function getAllText(): string[] {
  const chunks: string[] = []
  chunks.push(reportSummary)
  for (const section of reportSections) {
    chunks.push(section.title)
    for (const sub of section.subsections) {
      chunks.push(sub.title)
      for (const para of sub.paragraphs) {
        chunks.push(para)
      }
    }
  }
  return chunks
}

export function TtsPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [rate, setRate] = useState(1.0)
  const chunksRef = useRef<string[]>(getAllText())

  useEffect(() => {
    const loadVoices = () => {
      const all = speechSynthesis.getVoices()
      const korean = all.filter(v => v.lang.startsWith('ko'))
      const available = korean.length > 0 ? korean : all.slice(0, 5)
      setVoices(available)
      if (available.length > 0 && !voice) {
        setVoice(available[0])
      }
    }
    loadVoices()
    speechSynthesis.addEventListener('voiceschanged', loadVoices)
    return () => speechSynthesis.removeEventListener('voiceschanged', loadVoices)
  }, [voice])

  const speakChunk = useCallback((idx: number) => {
    if (idx >= chunksRef.current.length) {
      setIsPlaying(false)
      setCurrentIdx(0)
      return
    }
    const utterance = new SpeechSynthesisUtterance(chunksRef.current[idx])
    if (voice) utterance.voice = voice
    utterance.lang = 'ko-KR'
    utterance.rate = rate
    utterance.onend = () => {
      const next = idx + 1
      setCurrentIdx(next)
      speakChunk(next)
    }
    speechSynthesis.speak(utterance)
  }, [voice, rate])

  const handlePlay = () => {
    if (isPaused) {
      speechSynthesis.resume()
      setIsPaused(false)
      return
    }
    speechSynthesis.cancel()
    setIsPlaying(true)
    setIsPaused(false)
    setCurrentIdx(0)
    speakChunk(0)
  }

  const handlePause = () => {
    speechSynthesis.pause()
    setIsPaused(true)
  }

  const handleStop = () => {
    speechSynthesis.cancel()
    setIsPlaying(false)
    setIsPaused(false)
    setCurrentIdx(0)
  }

  const total = chunksRef.current.length
  const progress = total > 0 ? Math.round((currentIdx / total) * 100) : 0

  return (
    <div className="tts-bar">
      {!isPlaying ? (
        <button onClick={handlePlay}>&#9654; 듣기</button>
      ) : (
        <>
          {isPaused ? (
            <button onClick={handlePlay}>&#9654; 계속</button>
          ) : (
            <button className="playing" onClick={handlePause}>&#10074;&#10074; 일시정지</button>
          )}
          <button onClick={handleStop}>&#9632; 정지</button>
        </>
      )}

      <span className="tts-status">
        {isPlaying ? `${progress}% 읽는 중...` : '보고서를 음성으로 들을 수 있습니다'}
      </span>

      <select
        value={rate}
        onChange={e => setRate(parseFloat(e.target.value))}
        aria-label="읽기 속도"
      >
        <option value={0.75}>0.75x</option>
        <option value={1.0}>1.0x</option>
        <option value={1.25}>1.25x</option>
        <option value={1.5}>1.5x</option>
      </select>

      {voices.length > 1 && (
        <select
          value={voice?.name || ''}
          onChange={e => {
            const v = voices.find(v => v.name === e.target.value)
            if (v) setVoice(v)
          }}
          aria-label="음성 선택"
          style={{ maxWidth: 150 }}
        >
          {voices.map(v => (
            <option key={v.name} value={v.name}>
              {v.name.length > 20 ? v.name.slice(0, 20) + '...' : v.name}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}
