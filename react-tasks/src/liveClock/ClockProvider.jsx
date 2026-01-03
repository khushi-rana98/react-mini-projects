import React from 'react'
import {useState,useEffect} from 'react'
import { ClockContext } from './ClockContext'
function ClockProvider({children,autoStopAfterMs=5000}) {
  const [now,setNow]=useState(new Date());
  const [running,setRunning]=useState(true);

  useEffect(()=>{
    if(!running) return;
    const intervalId=setInterval(()=>setNow(new Date()),1000);
    return ()=>clearInterval(intervalId);
  },[running]);

useEffect(()=>{
const TimeId=setTimeout(()=>setRunning(false),autoStopAfterMs);
return()=>clearInterval(TimeId);
},[autoStopAfterMs]);

  const start=()=>setRunning(true);
  const stop=()=>setRunning(false);
  const reset=()=>{
    setRunning(true);
    setNow(new Date());
  };


  return (
   <ClockContext.Provider value={{now, running, start , stop, reset}}>
    {children}
   </ClockContext.Provider>
  )
}

export default ClockProvider;