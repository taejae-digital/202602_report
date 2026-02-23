import { bookPart1, type BookChapter, type BookSection } from '../data/book-content-part1'
import { bookPart2 } from '../data/book-content-part2'
import { bookPart3, type BookChapter as BookChapter3 } from '../data/book-content-part3'

/* ───────────────────── all chapters in order ───────────────────── */

const allChapters: BookChapter[] = [...bookPart1, ...bookPart2]

/* ───────────────────── TOC data ───────────────────── */

interface TocEntry {
  id: string
  label: string
  indent?: boolean
}

function buildToc(): TocEntry[] {
  const items: TocEntry[] = []

  // Part 1-4 from allChapters
  let lastPart = -1
  for (const ch of allChapters) {
    if (ch.partNumber !== lastPart) {
      if (ch.partNumber === 0) {
        items.push({ id: ch.id, label: '프롤로그: 왜 이 책을 읽어야 하는가' })
      } else {
        items.push({ id: ch.id, label: `Part ${ch.partNumber}` })
      }
      lastPart = ch.partNumber
    }
    if (ch.partNumber > 0) {
      items.push({ id: ch.id, label: ch.title, indent: true })
    }
  }

  // Part 5-6 + epilogue from bookPart3
  for (const ch of bookPart3) {
    if (ch.id === 'epilogue') {
      items.push({ id: 'book-epilogue', label: '에필로그: 노동이 아닌 존재로서의 인간' })
    } else {
      const partNum = ch.part
      items.push({ id: ch.id, label: `Part ${partNum}` })
      items.push({ id: ch.id, label: ch.title, indent: true })
    }
  }

  // deduplicate Part headers
  const seen = new Set<string>()
  return items.filter(item => {
    const key = item.label + (item.indent ? '-indent' : '')
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

const tocItems = buildToc()

/* ───────────────────── style constants ───────────────────── */

const COLORS = {
  primary: '#1e3a5f',
  accent: '#4338ca',
  accentLight: '#6366f1',
  warm: '#b45309',
  warmBg: '#fffbeb',
  warmBorder: '#f59e0b',
  greenBg: '#f0fdf4',
  greenBorder: '#22c55e',
  green: '#15803d',
  blueBg: '#eff6ff',
  blueBorder: '#3b82f6',
  blue: '#1d4ed8',
  purpleBg: '#faf5ff',
  purpleBorder: '#a855f7',
  purple: '#7e22ce',
  grayText: '#475569',
  lightGray: '#f8fafc',
  tocBg: '#f8fafc',
}

/* ───────────────────── sub-components ───────────────────── */

function KeyTakeawayBox({ text }: { text: string }) {
  return (
    <div style={{
      background: COLORS.warmBg,
      borderLeft: `4px solid ${COLORS.warmBorder}`,
      padding: '16px 20px',
      borderRadius: 8,
      marginTop: 20,
      marginBottom: 20,
    }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.warm, marginBottom: 6 }}>
        핵심 정리
      </div>
      <div style={{ fontSize: 14, color: '#92400e', lineHeight: 1.7 }}>{text}</div>
    </div>
  )
}

function ActionItemsBox({ actionItems }: {
  actionItems: { individual: string[]; community: string[]; society: string[] }
}) {
  const sections = [
    { title: '나(개인)가 할 수 있는 것', items: actionItems.individual, bg: COLORS.greenBg, border: COLORS.greenBorder, color: COLORS.green },
    { title: '우리 공동체가 할 수 있는 것', items: actionItems.community, bg: COLORS.blueBg, border: COLORS.blueBorder, color: COLORS.blue },
    { title: '사회/국가가 추진해야 할 것', items: actionItems.society, bg: COLORS.purpleBg, border: COLORS.purpleBorder, color: COLORS.purple },
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 16,
      marginTop: 24,
      marginBottom: 24,
    }}>
      {sections.map(s => (
        s.items.length > 0 && (
          <div key={s.title} style={{
            background: s.bg,
            borderLeft: `4px solid ${s.border}`,
            padding: '16px 20px',
            borderRadius: 8,
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: s.color, marginBottom: 10 }}>
              {s.title}
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, listStyle: 'disc' }}>
              {s.items.map((item, i) => (
                <li key={i} style={{ fontSize: 13, color: COLORS.grayText, marginBottom: 6, lineHeight: 1.6 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )
      ))}
    </div>
  )
}

function BookSectionView({ section }: { section: BookSection }) {
  return (
    <div style={{ marginBottom: 32 }}>
      {section.title && (
        <h4 style={{
          fontSize: '1rem',
          fontWeight: 600,
          color: COLORS.primary,
          marginBottom: 12,
          paddingTop: 8,
        }}>
          {section.title}
        </h4>
      )}
      <div
        style={{ fontSize: 15, lineHeight: 1.85, color: '#334155' }}
        dangerouslySetInnerHTML={{ __html: section.content }}
      />
      {section.keyTakeaway && <KeyTakeawayBox text={section.keyTakeaway} />}
      {section.actionItems && <ActionItemsBox actionItems={section.actionItems} />}
    </div>
  )
}

function BookChapterView({ chapter }: { chapter: BookChapter }) {
  const isProlog = chapter.partNumber === 0

  return (
    <div id={chapter.id} style={{ marginBottom: 56, scrollMarginTop: 24 }}>
      <div style={{
        borderBottom: isProlog ? 'none' : `2px solid ${COLORS.accentLight}`,
        paddingBottom: isProlog ? 0 : 12,
        marginBottom: 24,
      }}>
        {!isProlog && (
          <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.accentLight, marginBottom: 4 }}>
            Part {chapter.partNumber}
          </div>
        )}
        <h3 style={{
          fontSize: isProlog ? '1.5rem' : '1.3rem',
          fontWeight: 700,
          color: COLORS.primary,
          margin: 0,
        }}>
          {chapter.title}
        </h3>
        {chapter.subtitle && (
          <p style={{ fontSize: 14, color: '#64748b', marginTop: 4 }}>{chapter.subtitle}</p>
        )}
      </div>
      {chapter.sections.map(section => (
        <BookSectionView key={section.id} section={section} />
      ))}
    </div>
  )
}

/* ───────────────── Part 3 renderer (different data shape) ───────────────── */

function Part3ChapterView({ chapter }: { chapter: BookChapter3 }) {
  const isEpilogue = chapter.id === 'epilogue'
  const anchorId = isEpilogue ? 'book-epilogue' : chapter.id

  return (
    <div id={anchorId} style={{ marginBottom: 56, scrollMarginTop: 24 }}>
      <div style={{
        borderBottom: `2px solid ${COLORS.accentLight}`,
        paddingBottom: 12,
        marginBottom: 24,
      }}>
        {!isEpilogue && (
          <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.accentLight, marginBottom: 4 }}>
            Part {chapter.part}
          </div>
        )}
        <h3 style={{
          fontSize: isEpilogue ? '1.5rem' : '1.3rem',
          fontWeight: 700,
          color: COLORS.primary,
          margin: 0,
        }}>
          {chapter.title}
        </h3>
        {chapter.subtitle && (
          <p style={{ fontSize: 14, color: '#64748b', marginTop: 4 }}>{chapter.subtitle}</p>
        )}
      </div>

      {chapter.sections.map((section, i) => (
        <div key={i} style={{ marginBottom: 28 }}>
          {section.heading && (
            <h4 style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: COLORS.primary,
              marginBottom: 12,
              paddingTop: 8,
            }}>
              {section.heading}
            </h4>
          )}
          {section.paragraphs.map((para, j) => (
            <p key={j} style={{
              fontSize: 15,
              lineHeight: 1.85,
              color: '#334155',
              marginBottom: 12,
            }}>
              {para}
            </p>
          ))}
        </div>
      ))}
    </div>
  )
}

/* ───────────────────── TOC ───────────────────── */

function BookTocList() {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {tocItems.map((item, i) => (
        <li key={i} style={{ marginBottom: item.indent ? 4 : 10, marginTop: item.indent ? 0 : (i > 0 ? 4 : 0) }}>
          <a
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            style={{
              color: item.indent ? '#6366f1' : COLORS.primary,
              textDecoration: 'none',
              fontSize: item.indent ? 13 : 14,
              fontWeight: item.indent ? 400 : 600,
              paddingLeft: item.indent ? 16 : 0,
              display: 'block',
              lineHeight: 1.6,
            }}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

/* ───────────────────── main BookView ───────────────────── */

export function BookView() {
  return (
    <div className="section" style={{ maxWidth: 800 }}>
      {/* Book header */}
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <h2 style={{
          fontSize: '1.8rem',
          fontWeight: 800,
          color: COLORS.primary,
          margin: 0,
          lineHeight: 1.3,
        }}>
          시너지 북
        </h2>
        <p style={{
          fontSize: 15,
          color: '#64748b',
          marginTop: 8,
          marginBottom: 0,
        }}>
          AI 시대 새로운 사회 계약을 위한 종합 안내서
        </p>
        <p style={{
          fontSize: 13,
          color: '#94a3b8',
          marginTop: 4,
        }}>
          태재미래전략연구원 디지털전환과사회변혁팀 | 2026
        </p>
      </div>

      {/* Table of contents */}
      <nav style={{
        background: COLORS.tocBg,
        padding: 24,
        borderRadius: 12,
        marginBottom: 48,
        borderLeft: `4px solid ${COLORS.accentLight}`,
      }}>
        <h3 style={{ fontSize: '0.95rem', marginBottom: 16, color: COLORS.accent }}>
          목차
        </h3>
        <BookTocList />
      </nav>

      {/* Part 1-4: chapters from bookPart1 + bookPart2 */}
      {allChapters.map(chapter => (
        <BookChapterView key={chapter.id} chapter={chapter} />
      ))}

      {/* Part 5-6 + Epilogue from bookPart3 */}
      {bookPart3.map(chapter => (
        <Part3ChapterView key={chapter.id} chapter={chapter} />
      ))}

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        padding: '40px 0',
        borderTop: '2px solid #e2e8f0',
        marginTop: 40,
        color: '#94a3b8',
        fontSize: 13,
      }}>
        <p>본 책은 태재미래전략연구원의 연구 보고서를 기반으로 작성되었습니다.</p>
        <p style={{ marginTop: 4 }}>
          &copy; 2026 태재미래전략연구원 디지털전환과사회변혁팀
        </p>
      </div>
    </div>
  )
}
