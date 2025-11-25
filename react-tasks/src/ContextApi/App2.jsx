import { ThemeProvider } from "./ThemeContext";
import Child from "./Child";
function App2(){
  return(
    <div>
      <ThemeProvider>
        <Child/>
      </ThemeProvider>
    </div>
  )
}
export default App2;