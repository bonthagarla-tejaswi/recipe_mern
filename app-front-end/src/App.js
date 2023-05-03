import React from 'react';
import LoginPage from './LoginPage';
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
