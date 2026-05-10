






































// import { useState } from 'react'
// import './SimplePage.scss'
// import './Settings.scss'

// function Settings() {
//   const [categories, setCategories] = useState({
//     health: true,
//     sport: true,
//     travel: true,
//     business: false,
//   })

//   const [darkMode, setDarkMode] = useState(false)

//   const toggleCategory = (cat) => {
//     setCategories({ ...categories, [cat]: !categories[cat] })
//   }

//   return (
//     <div className="simple-page">
//       <h2>Settings</h2>
//       <p className="settings-label">Categories</p>

//       <div className="category-toggles">
//         {Object.entries(categories).map(([name, enabled]) => (
//           <div key={name} className="toggle-item">
//             <div className="category-icon">
//               {name.charAt(0).toUpperCase()}
//             </div>
//             <span className="category-name">{name.toUpperCase()}</span>
//             <label className="toggle-switch">
//               <input
//                 type="checkbox"
//                 checked={enabled}
//                 onChange={() => toggleCategory(name)}
//               />
//               <span className="slider"></span>
//             </label>
//           </div>
//         ))}
//       </div>

//       <button className="dark-mode-btn">Toggle dark mode</button>
//     </div>
//   )
// }

// export default Settings
