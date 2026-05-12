import { useState } from 'react'
import Detail from '../components/Detail'

function Archive() {
  const [articles, setArticles] = useState(() => {
    return JSON.parse(localStorage.getItem("archive") || "[]")
  })

  function handleRemove(article) {
    const updated = articles.filter((a) => a.url !== article.url)
    setArticles(updated)
    localStorage.setItem("archive", JSON.stringify(updated))
  }

  // Group articles by their section/category
  const grouped = {}
  for (const article of articles) {
    const cat = (article.section || 'saved').toUpperCase()
    if (!grouped[cat]) grouped[cat] = []
    grouped[cat].push(article)
  }

  return (
    <div>
      {articles.length === 0 ? (
        <p style={{ padding: '20px', color: '#666' }}>
          Your saved articles will appear here.
        </p>
      ) : (
        Object.entries(grouped).map(([cat, arts]) => (
          <Detail
            key={cat}
            category={cat}
            articles={arts}
            action="delete"
            onRemove={handleRemove}
          />
        ))
      )}
    </div>
  )
}

export default Archive
