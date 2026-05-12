import { useState } from 'react'
import ArticleCard from './ArticleCard'
import NewsifyIcon from './icons/newsify-icon'
import './Detail.scss'

export default function Detail({ category, articles, search, action = "bookmark", onRemove }) {
  const [isOpen, setIsOpen] = useState(true)

  const visibleArticles = search
    ? articles.filter((a) =>
        (a.title || '').toLowerCase().includes(search.toLowerCase()) ||
        (a.abstract || '').toLowerCase().includes(search.toLowerCase())
      )
    : articles

  return (
    <div className="detail">
      <button className="detail__header" onClick={() => setIsOpen(!isOpen)}>
        <NewsifyIcon />
        <span className="detail__name">{category}</span>
        <span className="detail__chevron">
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          )}
        </span>
      </button>

      {isOpen && (
        <div className="detail__articles">
          {visibleArticles.slice(0, 5).map((article) => (
            <ArticleCard
              key={article.url}
              article={article}
              action={action}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
    </div>
  )
}
