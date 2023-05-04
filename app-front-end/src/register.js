import React, { useState } from 'react';
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
    <div className="register">
      <center>
      <h1>App Registration</h1>
      <>
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
      </>
      </center>
    </div>
  );
  }

export default Register;
