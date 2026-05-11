import { useQuery } from '@tanstack/react-query'
import useCachedFetch from '../hooks/useCachedFetch'
import Detail from '../components/Detail'


export default function Home() {

  const showHealth = localStorage.getItem("health") || "true"
  const showSports = localStorage.getItem("sports") || "true"
  const showBusiness = localStorage.getItem("buisness") || "true"
  const showTravel = localStorage.getItem("travel") || "true"


  const { data: healthData, isPending: healthPending, error: healthError }
    = showHealth === "true" ? useCachedFetch("health") : { data: null, isPending: false, error: null }
  const { data: sportsData, isPending: sportsPending, error: sportsError }
    = showSports === "true" ? useCachedFetch("sports") : { data: null, isPending: false, error: null }
  const { data: businessData, isPending: businessPending, error: businessError }
    = showBusiness === "true" ? useCachedFetch("business") : { data: null, isPending: false, error: null }

  const { data: travelData, isPending: travelPending, error: travelError }
    = showTravel === "true" ? useCachedFetch("travel") : { data: null, isPending: false, error: null }


  console.log(sportsData)
  console.log(sportsPending)

  // data && console.log( data)


  // error && console.log(error)
  return (
    <>
      {showHealth === "true" && (!healthPending && healthData && <Detail category="Health" articles={healthData.results} />)}
      {showSports === "true" && (!sportsPending && sportsData && <Detail category="Sports" articles={sportsData.results} />)}
      {showBusiness === "true" && (!businessPending && businessData && <Detail category="Business" articles={businessData.results} />)}
      {showTravel === "true" && (!travelPending && travelData && <Detail category="Travel" articles={travelData.results} />)}



    </>
  )
}



























// import { useState } from 'react'
// import SearchBar from '../components/SearchBar'
// import NewsCategory from '../components/NewsCategory'
// import './Home.scss'

// // The three news categories shown on the home page.
// // Each one gets its own useCachedFetch call inside NewsCategory.
// const CATEGORIES = [
//   { name: 'HEALTH',  section: 'lifeandhealth', initiallyOpen: true  },
//   { name: 'SPORT',   section: 'sport',          initiallyOpen: false },
//   { name: 'TRAVEL',  section: 'travel',         initiallyOpen: true  },
// ]

// function Home() {
//   // search state is shared across all categories so filtering works globally
//   const [search, setSearch] = useState('')

//   return (
//     <div className="home">
//       {/* SearchBar updates the search state when the user types */}
//       <SearchBar value={search} onChange={setSearch} />

//       {/* Each category renders its own list of articles */}
//       {CATEGORIES.map((cat) => (
//         <NewsCategory
//           key={cat.name}
//           name={cat.name}
//           section={cat.section}
//           initiallyOpen={cat.initiallyOpen}
//           search={search}
//         />
//       ))}
//     </div>
//   )
// }

// export default Home
