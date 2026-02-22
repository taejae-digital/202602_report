import { declarationArticles, declarationPreamble } from '../data/declaration-data'
import { getResearcherById } from '../data/researchers'
import { ResearcherTag } from './ResearcherTag'

export function DeclarationView() {
  return (
    <div className="section">
      <h2 className="section-title">건강하고 안전한 미래를 위한 인간 선언 (초안)</h2>

      <div className="declaration">
        <div style={{ marginBottom: 24, fontFamily: 'var(--font-serif)', lineHeight: 2 }}>
          {declarationPreamble.split('\n\n').map((para, i) => (
            <p key={i} style={{ marginBottom: 12, fontSize: 15, color: '#374151' }}>
              {para}
            </p>
          ))}
        </div>

        {declarationArticles.map(article => (
          <div key={article.num} className="declaration-article">
            <span className="article-num">
              제{article.num}조. {article.title}
            </span>
            <p className="article-text">{article.text}</p>
            <p className="article-basis">근거: {article.basis}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 6 }}>
              {article.researchers.map(id => {
                const r = getResearcherById(id)
                return r ? (
                  <ResearcherTag key={id} id={id} displayText={r.koreanName} />
                ) : null
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
