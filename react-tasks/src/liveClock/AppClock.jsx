import React from 'react';
import ClockProvider from './ClockProvider';
import ClockDisplay from './ClockDisplay';
import ControlPanel from './ControlPanel';
import MessageAftr from './MessageAftr';

function AppClock(){
  return(
    <ClockProvider>
      <h1>Live Clock with Controls</h1>
      <ClockDisplay/>
      <ControlPanel/>
      <MessageAftr msg="Hey! this msg appears aftr 5 seconds" delayMs={5000}/>
    </ClockProvider>
  )
}
export default AppClock