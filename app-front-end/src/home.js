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
<<<<<<< HEAD
        <div className="home1">
            <>
                <br/>
                <button onClick={login1}>Log-in</button><br/><br/>
                <button onClick={register1}>Register</button>
               <div className="h"> <b><i>Recipe App</i></b></div>
            </>
=======
        <div classname="home">
            <div classname="all">
                <br/>
                <button onClick={login1}>Log-in</button><br/>
                <button onClick={register1}>Register</button>
                <img src="logo.jpg" height="300px" width="300px"/><br/>
                <h1><b><i>Recipe App</i></b></h1>
            </div>
>>>>>>> b550d7d7544c92cb183850c48d2663dd81948f34
        </div>
    );
}
export default Home;