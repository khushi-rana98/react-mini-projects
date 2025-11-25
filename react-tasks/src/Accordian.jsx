import {useState} from 'react'
function Accordian(){
  const [isOpen,setIsOpen]=useState(false);
  return(
    <div>
      <h2>Accordian</h2>
      <button onClick={()=>setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && <p>This is the content i was supposed to hide.</p>}
    </div>
  )
}
export default Accordian;