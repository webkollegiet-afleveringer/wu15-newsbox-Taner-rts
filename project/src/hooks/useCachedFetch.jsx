import { useQuery } from '@tanstack/react-query'

export default function useCachedFetch(category) {

  async function fetchHome() {
    const apiKey = "37VJxj2nXbj7HLrxGu88zsSuLBXkZznxlPN11qwMcC5njAjK"
    const endpoint = `https://api.nytimes.com/svc/news/v3/content/nyt/${category}.json?api-key=${apiKey}`;
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  }


  const { data, isPending, error } = useQuery({
    queryKey: [category],
    queryFn: fetchHome,
    staleTime: 1000 * 15
  })


  return { data, isPending, error };
}
