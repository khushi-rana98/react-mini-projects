// Task1 of Custom hook

import React from 'react'
import useToggle from './Toggle';
function Toggle1() {
  const [light,setLight]=useToggle(false);
  return (
    <>
  <h2>Status: {light?"ON":"OFF"}</h2>
  <button onClick={setLight}>Toggle</button>
  </>
  )
}

export default Toggle1