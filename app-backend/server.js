import express from "express";
import cors from 'cors';
import { db,connectToDB } from "../database";


const app= express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("server is running successfully");

})


connectToDB(()=>{
    app.listen(9000,()=>{
        console.log("server is running at port 9000");
    })
})

