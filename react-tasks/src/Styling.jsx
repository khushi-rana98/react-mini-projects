import './Styling.css'; //external css
import styles from './Styling.module.css';
import styled from 'styled-components';
const StyledBtn=styled.button`
background-color:blue;
padding:10px;
color:white;
border-radius:6px;
border:none;
cursor:pointer;
margin:10px;
`;
function Styling(){
  const inlineStyle={
    backgroundColor:"cadetBlue",
    color:"white",
    padding:"10px",
    borderRadius:"6px",
    border:"none",
    cursor:"pointer",
    margin:"10px"

  }
  
  return(
    <div>
    <style>
      {
        `.internal-btn{
        background-Color:green;
        padding:10px;
        margin:10px;
        border-radius:6px;
        color:white;
        border:none;
        }`
      }
    </style>
      <h2 style={{margin:"10px",backgroundColor:"black" ,color:"white",padding:"10px",


      }}>React CSS Styling Methods</h2>

   
      <button style={{backgroundColor:"cadetBlue", padding:"10px", margin:"10px",color:"white",
        border:"none",
        borderRadius:"5px"
      }}>Inline Styling</button>

    <button className='internal-btn'>Internal Button</button>
      <button className="external-btn">External CSS</button>
   <button className={styles.moduleBtn}>CSS Module</button>
     <StyledBtn>Styled components</StyledBtn>
    </div>
  )
}
export default Styling;