import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { client } from "./utils/db.js";
import { db } from "./utils/db.js";
import multer from "multer";
import cloudinary from "cloudinary";
import { cloudinaryUpload } from "./utils/upload.js";


async function init(){
    
    dotenv.config();
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
        secure: true,
      });
    const app = express();
    app.use(cors())
    app.use(bodyParser.json());
    const port = 4000;

    try {
        await client.connect();
    } catch (error) {
        console.log(error);
    }
    

    const multerUpload = multer({dest: 'public\\files'});
    const avatarUpload = multerUpload.fields([{ name: 'avatar', maxCount: 6}])
    
    app.get("/products", async(req,res)=>{
        
        try {
            const query = {}
            const keyword = req.query.keyword
            if(keyword){
                query.$or = [
                    {name:new RegExp(`${keyword}`,"i")},
                    {code:new RegExp(`${keyword}`,"i")}
                ] 
            }

            const collection = db.collection('products')
            const products =  await collection
            .find(query)
            .toArray()
            return res.status(200).json(products)
        } catch (error) {
            return res.status(404).json({error:error})
        }
       
    })

    app.post('/upload', avatarUpload, async(req,res)=>{

        try {
            const products = {
                name:req.body.name,
                code:req.body.code,
                price:req.body.price,
            }
            
            const avatarUrl = await cloudinaryUpload(req.files);
            products['avatars'] = avatarUrl;

            const collection = db.collection('products')
            await collection.insertOne(products)

            return res.json({
                message:'Product has been created successfully'
            })
        } catch (error) {
            console.log(error)
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

