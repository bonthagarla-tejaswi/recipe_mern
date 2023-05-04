import React from "react";
import {useNavigate} from "react-router-dom";
import './App.css';




const Home =() =>{
    const nav=useNavigate();
    const login1=async()=>{
        nav("/LoginPage")
    }
    const register1=async()=>{
        nav("/register")
    }
    return(
        <div className="home1">
            <>
                <br/>
                <button onClick={login1}>Log-in</button><br/><br/>
                <button onClick={register1}>Register</button>
               <div className="h"> <b><i>Recipe App</i></b></div>
            </>
        </div>
    );
}
export default Home;