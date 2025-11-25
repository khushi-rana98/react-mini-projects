import {useState} from 'react'
function HideContent(){
  const [isOpen,setIsOpen]=useState(true);
  return(
    <div>
      <h2>Accordian</h2>
      <button onClick={()=>setIsOpen(!isOpen)}>{isOpen?"Hide":"Show"}</button>
      {
        isOpen && <div>Click to show n click if u need this to hide</div>
      }
    </div>
  )
}
export default HideContent;