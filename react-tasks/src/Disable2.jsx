import {useState} from 'react'
function Disable2(){
  const [isDisabled,setIsDisabled]=useState(false);
  const handler=()=>{
    alert("button clicked!");
    setIsDisabled(true);
  }
  return(
    <div>
      <button onClick={handler} disabled={isDisabled}>{(!isDisabled)?"Click Me":"Disabled"}</button>
    </div>
  )
}
export default Disable2;