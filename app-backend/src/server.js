import express from "express";
import { db,connectToDB } from "./db.js";


const app= express()
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("Server running!");
})
app.post('/insert',async (req, res) => {
    const details = await db.collection('recipe').insertOne({name:req.params.name,password:req.params.password
    })
 res.json(details);
});



connectToDB(()=>{
    app.listen(9000,()=>{
        console.log("server is running at port 9000");
    })
})

