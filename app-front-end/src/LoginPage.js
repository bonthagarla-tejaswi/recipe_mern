import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic
  }
  const [name,setName] =useState("")
  const [password,setPassword] =useState("")
  const Handleclick=async()=>{
    const  responce = await axios.post("http://localhost:9000/LoginPage/"+name+"/"+password);
        console.log(responce.data);
        if(responce.data)
        {
            alert("successful");
            nav('/main');
        }
        else{
            alert("failed")
        }


    }


  render() {
    return (
      <div className="login-page">
        <h1>Login to Your Account</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
          <button onClick={Handleclick}>Login</button>
      
        </form>
      </div>
    );
  }
}

export default LoginPage;
