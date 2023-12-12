import express, { query } from "express"
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { client } from "./utils/db.js";
import { db } from "./utils/db.js";

async function init(){
    
    dotenv.config();
    const app = express();
    app.use(cors())
    app.use(bodyParser.json());
    const port = 4000;
    await client.connect();
    
    app.get("/products", async(req,res)=>{
     
        try {
            const collection = db.collection('products')
            const query = {}
            const products =  await collection.find(query).toArray()
            return res.status(200).json(products)
        } catch (error) {
            return res.status(404).json({error:error})
        }
       
    })
    
    app.get("/",(req,res)=>{
        res.send('test')
    })
    
    app.get("*", (req, res) => {
        res.status(404).send('Not found endpoint');
    });

    app.listen(port,()=>{
        console.log(`Server is running at ${port}`)
    })
}

init();

