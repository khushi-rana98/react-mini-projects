import React, { useState, useEffect, useContext, createContext } from 'react';

const ClockContext = createContext(null); 

export const useClock = () => useContext(ClockContext);

export function ClockProvider({ children, autoStopAfterMs = 50000 }) {
  // Global state
  const [now, setNow] = useState(new Date());
  const [running, setRunning] = useState(true);

  // Interval effect – clock tick
  useEffect(() => {
    if (!running) return;
    const intervalId = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, [running]);

  // Timeout effect – auto stop
  useEffect(() => {
    const timerId = setTimeout(() => setRunning(false), autoStopAfterMs);
    return () => clearTimeout(timerId);
  }, [autoStopAfterMs]);

  // Control functions
  const start = () => setRunning(true);
  const stop = () => setRunning(false);
  const reset = () => {
    setNow(new Date());
    setRunning(true);
  };

  // Provide global state + controls to children
   // ✅ Provide global state + controls to children
  return (
    <ClockContext.Provider value={{ now, running, start, stop, reset }}>
      {children} {/* This is correct */}
    </ClockContext.Provider>
  );
}
