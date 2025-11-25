import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App2 from './ContextApi/App2'
// import Task1 from './Task1'
import App from './App'
import App3 from './ThemeContext/App3'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App3/>
    <App2/>
    <App/>
    {/* <Task1/> */}
  </StrictMode>,
)
