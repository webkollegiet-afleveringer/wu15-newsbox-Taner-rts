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
                              <NavLink to="/" className={({ isActive }) => isActive ? "primaryNavigation__menuLink--active" : "primaryNavigation__menuLink"}>
                                    <HomeIcon color={color} />
                                    Home</NavLink>
                        </li>
                        <li className="primaryNavigation__menuItem">
                              <NavLink to="/archive" className={({ isActive }) => isActive ? "primaryNavigation__menuLink--active" : "primaryNavigation__menuLink"}>
                                    <ArchiveIcon color={color} />
                                    Archive</NavLink>
                        </li>
                        <li className="primaryNavigation__menuItem">
                              <NavLink to="/popular" className={({ isActive }) => isActive ? "primaryNavigation__menuLink--active" : "primaryNavigation__menuLink"}>
                                    <PopularIcon color={color} />
                                    Popular</NavLink>
                        </li>
                        <li className="primaryNavigation__menuItem">
                              <NavLink to="/settings" className={({ isActive }) => isActive ? "primaryNavigation__menuLink--active" : "primaryNavigation__menuLink"}>
                                    <SettingsIcon color={color} />
                                    Settings
                              </NavLink>
                        </li>
                  </ul>
            </nav>
      )
}






























