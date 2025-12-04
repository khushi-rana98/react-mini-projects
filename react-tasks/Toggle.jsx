import React from 'react'
import {useState} from 'react';
function useToggle(defaultValue=false) {
  const [light,setLight]=useState(defaultValue);
  const toggle=()=>(
    setLight(prev=>!prev)
  )
  return [light,toggle];
}

export default useToggle