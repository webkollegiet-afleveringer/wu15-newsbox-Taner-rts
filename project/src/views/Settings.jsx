import React, { useEffect, useRef } from 'react';

export default function Settings() {


  const showHealth = localStorage.getItem("health") || "true"
  const showSports = localStorage.getItem("sports") || "true"
  const showBusiness = localStorage.getItem("buisness") || "true"
  const showTravel = localStorage.getItem("travel") || "true"

  function inputHandler(event) {
    localStorage.setItem(event.target.dataset.category, event.target.checked);
  }

  return (
    <>

      <h1>Settings</h1>
      <p>Health <input type="checkbox" data-category="health" onInput={inputHandler} defaultChecked={showHealth === "true"} /></p>
      <p>Sports <input type="checkbox" data-category="sports" onInput={inputHandler} defaultChecked={showSports === "true"} /></p>
      <p>Business <input type="checkbox" data-category="business" onInput={inputHandler} defaultChecked={showBusiness === "true"} /></p>
      <p>Travel <input type="checkbox" data-category="travel" onInput={inputHandler} defaultChecked={showTravel === "true"} /></p>
    </>
  );
}
