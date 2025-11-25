import {useState,useEffect} from'react';
function Cycle(){
  const [count,setCount]=useState(0);
  useEffect(()=>
  console.log("Component mounted"),[]);
  useEffect(()=>{
    if(count!=0){
      console.log(`Count updated->New value: ${count}`);
    }
  },[count])
  return(
    <div>
      <h2>Component Cycle</h2>
      <p>Count:{count}</p>
      <button onClick={()=>setCount(count+1)}>Increase</button>

    </div>
  )
}
export default Cycle;