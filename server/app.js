import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { client } from "./utils/db.js";

async function init(){
    
    dotenv.config();
    const app = express();
    app.use(cors())
    app.use(bodyParser.json());
    const port = 4002;
    await client.connect();
    
    app.get("/products",(req,res)=>{
        res.send('This is get products api')
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

