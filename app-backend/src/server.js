import express from "express";
import { db,connectToDB } from "./db.js";


const app= express()
app.use(express.json())



connectToDB(()=>{
    app.listen(9000,()=>{
        console.log("server is running at port 9000");
    })
})

