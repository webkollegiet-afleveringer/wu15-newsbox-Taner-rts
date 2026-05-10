import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import NewsCategory from '../components/NewsCategory'
import './Home.scss'

// The three news categories shown on the home page.
// Each one gets its own useCachedFetch call inside NewsCategory.
const CATEGORIES = [
  { name: 'HEALTH',  section: 'lifeandhealth', initiallyOpen: true  },
  { name: 'SPORT',   section: 'sport',          initiallyOpen: false },
  { name: 'TRAVEL',  section: 'travel',         initiallyOpen: true  },
]

function Home() {
  // search state is shared across all categories so filtering works globally
  const [search, setSearch] = useState('')

  return (
    <div className="home">
      {/* SearchBar updates the search state when the user types */}
      <SearchBar value={search} onChange={setSearch} />

      {/* Each category renders its own list of articles */}
      {CATEGORIES.map((cat) => (
        <NewsCategory
          key={cat.name}
          name={cat.name}
          section={cat.section}
          initiallyOpen={cat.initiallyOpen}
          search={search}
        />
      ))}
    </div>
  )
}

export default Home
