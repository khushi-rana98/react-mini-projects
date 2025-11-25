import {useState} from 'react';
function CheckList(){
  const [selected,setSelected]=useState([]);
  const list=["CV","React","Node.js","Project"];
  const handler=(item)=>{
    if(selected.includes(item))
      setSelected(selected.filter((e,index)=>(
      e!==item
      )))
      else{
        setSelected([...selected,item]);
      }
  }
  return(
    <div>
      <h2>CheckList</h2>
      {
        list.map((item,index)=>(
          <div>
          <label >
          <input type="checkbox" 
          checked={selected.includes(item)}
          onChange={()=>handler(item)}
          />
          {item}
          </label>
          </div>
        ))
      }
      <hr />
      <h2>Selected Items:</h2>
      <ul>
        {
          selected.length>0?(
            selected.map((item,index)=>(
              <li key={index}>{item}</li>
            ))
          ):(<li>No selected Item</li>)
        }
      </ul>

    </div>
  )
}
export default CheckList;