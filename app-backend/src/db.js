import {MongoClient} from "mongodb";

let db; 

async function connectToDB(cb){
    const url = "mongodb+srv://btejaswi2004:tejaswi2004@cluster0.fipenew.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("recipes");
    cb();
}

export {db,connectToDB};