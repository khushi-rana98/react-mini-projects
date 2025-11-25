import {useState} from 'react'
function FormHandling(){
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [submittedData,setSubmittedData]=useState(null);
  const handleForm=(e)=>{
    e.preventDefault();
    setSubmittedData({name,email});
  }
  return(
    <div>
      <h2>User Info:</h2>
      <form onSubmit={handleForm}>
      <label> Name:
      <input type="text" placeholder="Enter Name" 
      value={name} onChange={(e)=>setName(e.target.value)} />
      </label>
      <br></br>
      <label htmlFor="">Email:
        <input type="text" placeholder="Enter Email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
      </label>
    <br></br>
    <button type="Submit">Submit</button>
    </form>
    <hr></hr>
{
  submittedData && (
    <div>
      <h3>Submitted Data:</h3>
      <p><strong>Name:</strong>{submittedData.name}</p>
      <p><strong>Email:</strong>{submittedData.email}</p>
    </div>
  )
}
    </div>
  )
}
export default FormHandling;



