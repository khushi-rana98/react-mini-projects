import React ,{useEffect,useState} from 'react';
function MessageAfter({message,delayMs}){
  const [show,setShow]=useState(false);
  useEffect(()=>{
    const id=setTimeout(()=>setShow(true),delayMs);
    return ()=>clearTimeout(id);
  },[delayMs]);
  if(!show)return null;
  return <p>{message}</p>
}
export default MessageAfter;
