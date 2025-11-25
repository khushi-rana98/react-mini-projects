import { useState } from "react";
function DisableBtn(){
  const [text,setText]=useState("");
  return(
    <div>
      <h2>Disable Button</h2>
      <input type="text"
      placeholder="Enter the text"
      value={text}
      onChange={(e)=>setText(e.target.value)}
       />
       <button disabled={text.trim()===""}>Submit</button>
    </div>
  )
}
export default DisableBtn;