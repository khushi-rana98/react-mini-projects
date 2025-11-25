import { useState } from "react";
function Counter(){
  const [count,setCount]=useState(0);
  const Decrement=()=>{
    if(count>0){
      setCount(count-1);
    }
  }
  return(
    <div>
      <h2>Counter:{count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
       <button onClick={Decrement}>decrement</button>
    </div>
  )
}
export default Counter;