import './App.scss'
import Home from './views/home'
import Archive from './views/Archive'
import Settings from './views/Settings'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Layout from './components/Layout'
// import { link } from 'react-router'

 export default function App() {
  const queryClient = new QueryClient();
  // const {data, loading, error} = useCachedFetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=QXAGgEjsqNQ1GJhRMxVJQLXCjK9c0PLhHt2HEiyDJGIO6zFo') 
  // data && console.log('data', data)

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}























// import { BrowserRouter, Routes, Route } from 'react-router'
// import Layout from './components/Layout'
// import Home from './views/home'
// import Archive from './views/Archive'
// import Popular from './views/Popular'
// import Settings from './views/Settings'
// import './App.scss'

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Layout wraps all pages - it contains the header and bottom navigation */}
//         <Route element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="archive" element={<Archive />} />
//           <Route path="popular" element={<Popular />} />
//           <Route path="settings" element={<Settings />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
