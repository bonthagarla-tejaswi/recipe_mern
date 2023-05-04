import React, { useState } from 'react';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import  axios from 'axios';

function Register() {
  const nav=useNavigate();
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const Handleclick=async()=>{
    const responce = await axios.post("http://localhost:9000/register/"+name+"/"+email+"/"+password);
       console.log(responce.data);
       nav("/LoginPage")

  }



  
  return (
    <div className='register' >
      <div className="regcss">
      <h1>App Registration</h1>
     
        <label>
         <p>  Name:</p>
          <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
        </label><br></br><br></br>

          
        <label>
         <p>Email:</p>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        </label><br></br><br></br>
        <label>
         <p> Password:</p>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </label><br></br><br></br>
        <button onClick={Handleclick}>Register</button>
      </div>

    </div>
  );
  }

export default Register;
=======

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to submit registration data to server
  }
  
  return (
    <div>
      <center>
      <h1>App Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label><br/><br/>
        
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label><br/><br/>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label><br/><br/> 
        <button type="submit">Register</button>
      </form>
      </center>
    </div>
  );
}

export default Register;
>>>>>>> b550d7d7544c92cb183850c48d2663dd81948f34
