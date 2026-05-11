import { useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigation } from 'react-router'
import './Layout.scss'
import Navigation from './navigation'
import NewsifyIcon from './icons/newsify-icon'



export default function Layout() {
  const location = useLocation()

  useEffect(function() {

  }, [location]);


  return (
    <section className="layout">
      <header className="layout__header">
        <Link to="/" className="layout__logo">
          <NewsifyIcon />
          Newsify
        </Link>
        {location.pathname === '/' && <p>Søgebar</p>}
      </header>
      <main className="layout__content">
        <Outlet />
      </main>
      <nav className="layout__nav">
        <Navigation />
      </nav>
    </section>
  )
}























// import { Outlet } from 'react-router'
// import NavLinks from './NavLinks'
// import './Layout.scss'

// // The Newsify "N" logo as an SVG (so no image file needed)
// function NewsifyLogo() {
//   return (
//     <svg width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
//       <rect width="34" height="34" rx="7" fill="#6b7a00" />
//       {/* The "N" shape */}
//       <path d="M8 26V8l5.5 9V8h3v18l-5.5-9v9H8zM18.5 8H23v18h-4.5V8z" fill="white" />
//       {/* Small dot accent */}
//       <circle cx="26" cy="9" r="3" fill="#c4d600" />
//     </svg>
//   )
// }

// function Layout() {
//   return (
//     <div className="layout">
//       {/* Top header with the Newsify brand */}
//       <header className="layout__header">
//         <NewsifyLogo />
//         <span className="layout__title">Newsify</span>
//       </header>

//       {/* Outlet renders whichever page is currently active (Home, Archive, etc.) */}
//       <main className="layout__content">
//         <Outlet />
//       </main>

//       {/* Bottom navigation bar */}
//       <nav className="layout__nav">
//         <NavLinks />
//       </nav>
//     </div>
//   )
// }

// export default Layout
