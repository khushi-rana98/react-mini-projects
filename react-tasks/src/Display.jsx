function Display(){
  const list=["React","Js","Code","LeetCode"];

  return(
    <div>
      <h2>list of Items:</h2>
      <ul>
      {
        list.map((item,index)=>(
          <li key={index}>{item}</li>
        ))
      }
      </ul>
    </div>
  )
}
export default Display;