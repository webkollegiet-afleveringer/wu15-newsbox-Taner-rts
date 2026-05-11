import { useState } from 'react'
import './ArticleCard.scss'

function BookmarkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function ArticleCard({ article }) {
  const [bookmarked, setBookmarked] = useState(false)

  const title = article.webTitle
  const description = article.fields?.trailText || 'Read the full article to learn more about this topic...'

  return (
    <div className={`article-card ${bookmarked ? 'article-card--swiped' : ''}`} onClick={() => setBookmarked(!bookmarked)}>
      <div className="article-card__main">
        <div className="article-card__image" />
        <div className="article-card__text">
          <h3 className="article-card__title">{title}</h3>
          <p className="article-card__description">{description}</p>
        </div>
      </div>

      <div className="article-card__bookmark">
        <BookmarkIcon />
      </div>
    </div>
  )
}

export default ArticleCard
