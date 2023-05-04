import './App.css';
import Home from './home.js';
import LoginPage from './LoginPage';
import Register from './register';
import Main from './main';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/LoginPage' element={<LoginPage/>} />
     <Route path='/register' element={<Register/>}/> 
     <Route path="/main" element={<Main/>}/>

      </Routes>
     </BrowserRouter>
     </>
    </div>
  );
}
export default App;
