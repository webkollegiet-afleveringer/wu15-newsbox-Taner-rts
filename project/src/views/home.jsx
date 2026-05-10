import {useQuery} from '@tanstack/react-query'
import useCachedFetch from '../hooks/useCachedFetch'
import Detail from '../components/Detail'




// // async function fetchHome() {
// //   let result = fetch("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=QXAGgEjsqNQ1GJhRMxVJQLXCjK9c0PLhHt2HEiyDJGIO6zFo")
// //   return result
// }
export default function Home() {
  const {data: healthData, isPending: healthPending, error: healthError} = useCachedFetch("health")
  const {data: sportsData, isPending: sportsPending, error: sportsError} = useCachedFetch("sports")
  const {data: businessData, isPending: businessPending, error: businessError} = useCachedFetch("business")
  const {data: travelData, isPending: travelPending, error: travelError} = useCachedFetch("travel")
  

  console.log( sportsData)
  console.log( sportsPending)

  // data && console.log( data)


  // error && console.log(error)
    return (
<>
{!healthPending && <Detail category="Health" articles={healthData.results} />}
{!sportsPending && <Detail category="Sports" articles={sportsData.results} />}
{!businessPending && <Detail category="Business" articles={businessData.results} />}
{!travelPending && <Detail category="Travel" articles={travelData.results} />}



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
