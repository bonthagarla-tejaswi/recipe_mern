import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
const LoginPage=()=>{
  const nav=useNavigate();
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")
  const Handleclick=async()=>{
     const responce = await axios.post("http://localhost:9000/LoginPage/"+name+"/"+password);
        console.log(responce.data);
        if(responce.data)
        {
            nav('/main');
        }
        else{
            alert("failed")
        }
    }
    return (
      <div >
        <center>
        <h1>Login to Your Account</h1>
        
         <p> Username:</p>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e)=>setName(e.target.value)}
          /><br></br><br></br>
         <p> Password:</p>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e)=>setName(e.target.value)}
          /><br></br><br></br><br></br>
          <button onClick={Handleclick}>Login</button>
          </center>
      </div>
    );
  }


export default LoginPage;
