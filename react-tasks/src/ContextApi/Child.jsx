import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function Child(){
  const {theme,toggleTheme}=useContext(ThemeContext);
  return(
    <div>
      <h2>Current Theme:{theme}</h2>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}
export default Child;