import {useState} from 'react';
function FormValidation(){
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [error,setError]=useState({});
  const [submitted,setSubmitted]=useState(false);
  const handler=(e)=>{
    e.preventDefault();
    let validationErrors={};
    if(!name.trim()){
      validationErrors.name="Name is mandatory";
    }
    if(!email.trim()){
      validationErrors.email="Email is mandatory";
    }
    setError(validationErrors);
    if(Object.keys(validationErrors).length===0){
      setSubmitted(true);
    }
    else
      setSubmitted(false);
  }
  return(
    <div>
      <h2>Form validation</h2>
      {submitted && (
        <p style={{color:"green",fontWeight:"bold"}}>
          Form Submitted Successfully!
        </p>
      )}
      <form onSubmit={handler}>
      <label>
        Name: 
        <input type="text" placeholder='Enter name' 
        value={name} onChange={(e)=>setName(e.target.value)} />
      </label>
      {error.name && (<p style={{color:"red",fontWeight:"bold"}}>{error.name}</p>)}
      <label>
        Email:
        <input type="text" placeholder='Enter email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)} />
      </label>
      {error.email && (<p style={{color:"blue", fontWeight:"bold"}}>{error.email}</p>)}
      <button type="submit">Submit</button>
</form>
    </div>
  )
}
export default FormValidation;