import React from 'react';
import {useClock} from './ClockContext';
function ClockDisplay(){
  const {now,running}=useClock();
  return(
    <div>
      <h2>Time: {now.toLocaleTimeString()}</h2>
      <p>Status:{running?"Running":"Stopped"}</p>
    </div>
  )
}
export default ClockDisplay;