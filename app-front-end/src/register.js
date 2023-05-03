import React, { useState } from 'react';

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