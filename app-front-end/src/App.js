import React from 'react';
import LoginPage from './LoginPage';
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Register from './register';
import Home from './home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
