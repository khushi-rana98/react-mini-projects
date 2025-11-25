import React from "react";
import { useClock } from "./ClockContext";
function ControlPanel(){
  const {start,stop,reset}=useClock();
  return(
    <div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
export default ControlPanel;