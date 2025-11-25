import { useContext } from "react";
import Child from "./Child2";
import { ThemeContext, ThemeProvider } from "./Provider";
function App3(){
  return(
    <div>
  <ThemeProvider>
   <MainUi/>
  </ThemeProvider>
    </div>
  )
}
function MainUi(){
  const {theme}=useContext(ThemeContext);
  return(
    <div >
      <child></child>
    </div>
  )
}
export default App3;