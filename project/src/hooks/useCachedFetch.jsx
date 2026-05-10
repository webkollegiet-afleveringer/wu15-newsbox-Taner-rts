import { useQuery } from '@tanstack/react-query'

// useCachedFetch works like useFetchData but uses TanStack Query to cache the result.
// If you go back to a page you already visited, the data loads instantly from cache
// instead of making a new network request.
export function useCachedFetch(url) {
  const { data, isLoading, error } = useQuery({
    queryKey: [url],          // unique key – TanStack Query stores the result under this key
    queryFn: async () => {    // the function that actually fetches the data
      const response = await fetch(url)
      if (!response.ok) throw new Error(`Error ${response.status}`)
      return response.json()
    },
    staleTime: 5 * 60 * 1000,  // data stays "fresh" (no refetch) for 5 minutes
  })

  // Return the same shape as useFetchData so they are easy to compare
  return { data, pending: isLoading, error }
}
