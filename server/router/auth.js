import { Router } from "express";
import { db } from "../utils/db.js";
import bcrypt from "bcrypt"

const authRouter = Router();

authRouter.post('/register',async(req,res)=>{
    const user = {
        username: req.body.username,
        password: req.body.password,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        created_at:new Date()
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password,salt)

    const collection = db.collection('users');
    await collection.insertOne(user)

    return res.json({
        message:'user has been created successfully',
        data:user
    })
})

export default authRouter