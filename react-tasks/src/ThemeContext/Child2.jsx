import { ThemeContext } from "./Provider";
import { useContext } from "react";
function Child(){
  const {theme,toggleTheme}=useContext(ThemeContext);
  return(
    <div>
      <h2>Current Theme:{theme}</h2>
      <button onClick={toggleTheme}>toggleTheme</button>
    </div>
  )

}
export default Child;