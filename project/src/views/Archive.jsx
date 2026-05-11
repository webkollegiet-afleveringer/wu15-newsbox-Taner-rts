import { useState } from 'react'
import ArticleCard from '../components/ArticleCard'

function Archive() {
  const [bookmarkedArticles] = useState([
    { id: '1', webTitle: 'Health benefits of walking daily', fields: { trailText: 'Walking 30 minutes daily can improve heart health and mental wellness.' } },
    { id: '4', webTitle: 'Football team wins championship', fields: { trailText: 'The underdog team beats the favorites in an exciting final match.' } },
  ])

  return (
    <div className="simple-page">
      <h2>Archive</h2>
      {bookmarkedArticles.length > 0 ? (
        <div>
          {bookmarkedArticles.map((article) => (
            <ArticleCard key={article.id} article={article} action="delete" />
          ))}
        </div>
      ) : (
        <p>Your saved articles will appear here.</p>
      )}
    </div>
  )
}

export default Archive
