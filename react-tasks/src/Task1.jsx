import {useState} from 'react';
function Task1(){
  const [query,setQuery]=useState("");
  const list=["Dolly","Julie","Chandan","Khushi","Ayeji","Teju"];
  const filteredItems= list.filter((item,index)=>(
    item.toLowerCase().includes(query.toLowerCase())
  ));
  return(
    <div>
<input type="text" placeholder='Enter the query' value={query} onChange={(e)=>{setQuery(e.target.value);}} />
<ul>
  {
   filteredItems.length>0?(
    filteredItems.map((item,index)=>(
      <li key={index}>{item}</li>
    ))
   ):(<li> no result found</li>)
  }
</ul>
    </div>
  )
}
export default Task1;