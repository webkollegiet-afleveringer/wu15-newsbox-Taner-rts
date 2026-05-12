import { useState } from 'react'
import './Settings.scss'
import NewsifyIcon from '../components/icons/newsify-icon'

const CATEGORIES = [
  { key: 'health', label: 'HEALTH' },
  { key: 'sports', label: 'SPORT' },
  { key: 'business', label: 'BUSINESS' },
  { key: 'travel', label: 'TRAVEL' },
]

export default function Settings() {
  const [toggles, setToggles] = useState(() => {
    const result = {}
    for (const cat of CATEGORIES) {
      result[cat.key] = localStorage.getItem(cat.key) !== "false"
    }
    return result
  })

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  function handleToggle(key) {
    const newValue = !toggles[key]
    setToggles({ ...toggles, [key]: newValue })
    localStorage.setItem(key, String(newValue))
  }

  function toggleDarkMode() {
    const next = !darkMode
    setDarkMode(next)
    document.body.classList.toggle('dark-mode', next)
    localStorage.setItem('darkMode', String(next))
  }

  return (
    <div className="settings">
      <h1 className="settings__title">Settings</h1>
      <p className="settings__subtitle">Categories</p>

      <div className="settings__list">
        {CATEGORIES.map((cat) => (
          <div className="settings__item" key={cat.key}>
            <NewsifyIcon />
            <span className="settings__item-name">{cat.label}</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={toggles[cat.key]}
                onChange={() => handleToggle(cat.key)}
              />
              <span className="slider"></span>
            </label>
          </div>
        ))}
      </div>

      <button className="dark-mode-btn" onClick={toggleDarkMode}>
        Toggle dark mode
      </button>

      <p className="settings__version">Version 4.8.15.16.23.42</p>
    </div>
  )
}
