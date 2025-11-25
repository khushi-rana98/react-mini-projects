import {useState} from 'react';
function Accordian({title,content}){
  const [isOpen,setIsOpen]=useState(false);
  return(
    <div>
      <h2 onClick={()=>setIsOpen(!isOpen)}>{title}</h2>
      {isOpen && <p>{content}</p>}
    </div>
  )
}
export default function AccordianList(){
  const data=[{ title: "What is React?", content: "React is a JavaScript library for UI building." },
    { title: "What is useState?", content: "useState is a Hook to manage state in React." },
    { title: "What is Props?", content: "Props are used to pass data from parent to child." }];

    
  return(
    <div>
      <h2>FAQ Questions</h2>
      {
        data.map((item,index)=>(
          <Accordian key={index} title={item.title} content={item.content}/>
        ))
      }
    </div>
  )
}