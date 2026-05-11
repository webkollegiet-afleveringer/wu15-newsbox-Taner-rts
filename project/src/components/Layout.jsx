import { useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigation } from 'react-router'
import './Layout.scss'
import Navigation from './navigation'
import NewsifyIcon from './icons/newsify-icon'



export default function Layout() {
  const location = useLocation()

  useEffect(function () {

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





















