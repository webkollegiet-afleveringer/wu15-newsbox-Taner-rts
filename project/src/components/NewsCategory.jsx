import { useState } from 'react'
import { useCachedFetch } from '../hooks/useCachedFetch'
import ArticleCard from './ArticleCard'
import './NewsCategory.scss'

// The small "N" badge that appears before each category name
function NLogo() {
  return (
    <svg className="category__logo" width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="6" fill="#6b7a00" />
      <path d="M6 22V6l4.5 7.5V6h2.5v16l-4.5-7.5v7.5H6zM15.5 6H20v16h-4.5V6z" fill="white" />
      <circle cx="22" cy="7" r="2.5" fill="#c4d600" />
    </svg>
  )
}

// Chevron pointing down (category is open)
function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

// Chevron pointing right (category is closed)
function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

// Guardian API url goes through the Vite proxy we set up in vite.config.js
const BASE_URL = '/guardian/search'

function NewsCategory({ name, section, initiallyOpen = true, search }) {
  const [isOpen, setIsOpen] = useState(initiallyOpen)

  // DEMO DATA - replace API call temporarily
  const demoArticles = {
    HEALTH: [
      { id: '1', webTitle: 'Health benefits of walking daily', fields: { trailText: 'Walking 30 minutes daily can improve heart health and mental wellness.' } },
      { id: '2', webTitle: 'New study on sleep patterns', fields: { trailText: 'Researchers discover that 8 hours of quality sleep improves productivity by 40%.' } },
      { id: '3', webTitle: 'Nutrition tips for beginners', fields: { trailText: 'Simple dietary changes can lead to significant health improvements.' } },
    ],
    SPORT: [
      { id: '4', webTitle: 'Football team wins championship', fields: { trailText: 'The underdog team beats the favorites in an exciting final match.' } },
      { id: '5', webTitle: 'Olympic athletes break records', fields: { trailText: 'Three new world records set in swimming competition.' } },
      { id: '6', webTitle: 'Tennis star advances to finals', fields: { trailText: 'Champion player shows brilliant form throughout the tournament.' } },
    ],
    TRAVEL: [
      { id: '7', webTitle: 'Best beaches in Europe', fields: { trailText: 'Discover hidden gems and popular destinations for summer getaways.' } },
      { id: '8', webTitle: 'Mountain hiking guide', fields: { trailText: 'Essential tips for beginners starting their hiking adventure.' } },
      { id: '9', webTitle: 'City guide: Rome', fields: { trailText: 'Must-see landmarks and local restaurants in the Italian capital.' } },
    ],
  }

  // Use demo data instead of API for now
  const data = { response: { results: demoArticles[name] || [] } }
  const pending = false
  const error = null

  // Extract the articles array from the API response
  const articles = data?.response?.results ?? []

  // Filter articles by search text if the user has typed something
  const visibleArticles = search
    ? articles.filter((a) =>
        a.webTitle.toLowerCase().includes(search.toLowerCase())
      )
    : articles

  return (
    <div className="category">
      <button className="category__header" onClick={() => setIsOpen(!isOpen)}>
        <NLogo />
        <span className="category__name">{name}</span>
        <span className="category__chevron">
          {isOpen ? <ChevronDown /> : <ChevronRight />}
        </span>
      </button>

      {isOpen && (
        <div className="category__articles">
          {pending && <p className="category__status">Loading...</p>}
          {error && <p className="category__status">Error: {error.message}</p>}
          {!pending && !error && visibleArticles.length === 0 && (
            <p className="category__status">No articles found.</p>
          )}
          {visibleArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  )
}

export default NewsCategory
