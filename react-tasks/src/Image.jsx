import {useState} from 'react'
function ImageSlider(){
  const [currIndex,setIndex]=useState(0);
  const list=["https://picsum.photos/id/1011/400/300",
  "https://picsum.photos/id/1025/400/300",
  "https://picsum.photos/id/1003/400/300",
  "https://picsum.photos/id/1040/400/300",
  "https://picsum.photos/id/1069/400/300"];
  function prevImg(){
    if(currIndex===0)
      setIndex(list.length-1);
    else
      setIndex(currIndex-1);
  }
  function nextimg(){
    if(currIndex===list.length-1){
      setIndex(0);
    }
    else
      setIndex(currIndex+1);
  }
  return(
    <div>
      <h2>ImageSlider</h2>
      <img src={list[currIndex]} alt="image" />
      <div>
        <button onClick={prevImg}>Prev</button>
        <button onClick={nextimg}>Next</button>
      </div>
    </div>
  )
}
export default ImageSlider;