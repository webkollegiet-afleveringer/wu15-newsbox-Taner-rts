import useCachedFetch from '../hooks/useCachedFetch'
import Detail from '../components/Detail'

function Popular() {
  const { data: healthData, isPending: healthPending } = useCachedFetch("health")
  const { data: sportsData, isPending: sportsPending } = useCachedFetch("sports")
  const { data: travelData, isPending: travelPending } = useCachedFetch("travel")

  return (
    <div>
      {!healthPending && healthData && (
        <Detail category="HEALTH" articles={healthData.results.slice(0, 3)} action="none" />
      )}
      {!sportsPending && sportsData && (
        <Detail category="SPORT" articles={sportsData.results.slice(0, 3)} action="none" />
      )}
      {!travelPending && travelData && (
        <Detail category="TRAVEL" articles={travelData.results.slice(0, 3)} action="none" />
      )}
    </div>
  )
}

export default Popular
