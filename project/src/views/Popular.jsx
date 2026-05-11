import { useState } from 'react'
import ArticleCard from '../components/ArticleCard'
import './SimplePage.scss'

function Popular() {
  const [popularArticles] = useState([
    { id: '2', webTitle: 'New study on sleep patterns', fields: { trailText: 'Researchers discover that 8 hours of quality sleep improves productivity by 40%.' } },
    { id: '5', webTitle: 'Olympic athletes break records', fields: { trailText: 'Three new world records set in swimming competition.' } },
    { id: '8', webTitle: 'Mountain hiking guide', fields: { trailText: 'Essential tips for beginners starting their hiking adventure.' } },
  ])

  return (
    <div className="simple-page">
      <h2>Popular</h2>
      {popularArticles.length > 0 ? (
        <div>
          {popularArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p>The most-read stories will appear here.</p>
      )}
    </div>
  )
}

export default Popular
