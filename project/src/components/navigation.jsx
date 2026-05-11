import { Link, NavLink } from 'react-router';
import "./navigation.scss";
import SettingsIcon from './icons/settings-icon';
import HomeIcon from './icons/home-icons';
import ArchiveIcon from './icons/archives-icon';
import PopularIcon from './icons/popular-icons';



export default function Navigation() {
  const color = "currentColor"
    return (
        <nav className="primaryNavigation">
          <ul className="primaryNavigation__menu">
              <li className="primaryNavigation__menuItem">
                  <NavLink to="/" className= {({ isActive }) => isActive ? "primaryNavigation__menuLink--active" : "primaryNavigation__menuLink"}>
                  <HomeIcon color={color} />
                  Home</NavLink>
            </li>
            <li className="primaryNavigation__menuItem">
                  <NavLink to="/archive" className= {({ isActive }) => isActive ? "primaryNavigation__menuLink--active" : "primaryNavigation__menuLink"}>
                  <ArchiveIcon color={color} />
                  Archive</NavLink>
            </li>
            <li className="primaryNavigation__menuItem">
                  <NavLink to="/popular" className= {({ isActive }) => isActive ? "primaryNavigation__menuLink--active" : "primaryNavigation__menuLink"}>
                  <PopularIcon color={color} />
                  Popular</NavLink>
            </li>
            <li className="primaryNavigation__menuItem">
                  <NavLink to="/settings" className= {({ isActive }) => isActive ? "primaryNavigation__menuLink--active" : "primaryNavigation__menuLink"}>
                  <SettingsIcon color={color} />
                  Settings
                  </NavLink>
            </li>
          </ul>
         </nav>
    )
}
            






























// import { NavLink } from 'react-router'
// import './NavLinks.scss'

// // --- SVG icons (inline so no extra image files are needed) ---

// function HomeIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//       <polyline points="9 22 9 12 15 12 15 22" />
//     </svg>
//   )
// }

// function ArchiveIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
//     </svg>
//   )
// }

// function PopularIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
//   )
// }

// function SettingsIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="12" cy="12" r="3" />
//       <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
//     </svg>
//   )
// }

// // NavLink automatically adds the class "active" when you are on that page
// function NavLinks() {
//   return (
//     <>
//       <NavLink to="/" end className="nav-link">
//         <HomeIcon />
//         <span>Home</span>
//       </NavLink>

//       <NavLink to="/archive" className="nav-link">
//         <ArchiveIcon />
//         <span>Archive</span>
//       </NavLink>

//       <NavLink to="/popular" className="nav-link">
//         <PopularIcon />
//         <span>Popular</span>
//       </NavLink>

//       <NavLink to="/settings" className="nav-link">
//         <SettingsIcon />
//         <span>Settings</span>
//       </NavLink>
//     </>
//   )
// }

// export default NavLinks
