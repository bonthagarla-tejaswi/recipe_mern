import express from "express";
import { db,connectToDB } from "./db.js";
<<<<<<< HEAD
import cors from 'cors';



const app= express()
app.use(cors())
    
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Server running!");
})
app.post('/register/:name/:email/:password',async (req, res) => {
    const details = await db.collection('recipe').insertOne({name:req.params.name,email:req.params.email,password:req.params.password
    });
    res.json(details);
})
app.get                                                                                                                                                                                                                             ('/login/:name/:password',async (req, res) => {
    const details = await db.collection('recipe').findOne({name:req.params.name,password:req.params.password
    });
    res.json(details);
})

=======


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
>>>>>>> b550d7d7544c92cb183850c48d2663dd81948f34



connectToDB(()=>{
    app.listen(9000,()=>{
        console.log("server is running at port 9000");
    })
})

