import { useState } from 'react'
import useCachedFetch from '../hooks/useCachedFetch'
import Detail from '../components/Detail'
import SearchBar from '../components/SearchBar'

export default function Home() {
  const [search, setSearch] = useState('')

  const showHealth = localStorage.getItem("health") !== "false"
  const showSports = localStorage.getItem("sports") !== "false"
  const showBusiness = localStorage.getItem("business") !== "false"
  const showTravel = localStorage.getItem("travel") !== "false"

  const { data: healthData, isPending: healthPending } = useCachedFetch("health")
  const { data: sportsData, isPending: sportsPending } = useCachedFetch("sports")
  const { data: businessData, isPending: businessPending } = useCachedFetch("business")
  const { data: travelData, isPending: travelPending } = useCachedFetch("travel")

  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />
      {showHealth && !healthPending && healthData && (
        <Detail category="HEALTH" articles={healthData.results} search={search} />
      )}
      {showSports && !sportsPending && sportsData && (
        <Detail category="SPORT" articles={sportsData.results} search={search} />
      )}
      {showBusiness && !businessPending && businessData && (
        <Detail category="BUSINESS" articles={businessData.results} search={search} />
      )}
      {showTravel && !travelPending && travelData && (
        <Detail category="TRAVEL" articles={travelData.results} search={search} />
      )}
    </div>
  )
}
