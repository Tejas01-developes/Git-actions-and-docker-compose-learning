import { Request, Response } from "express"
import { collection1 } from "./schema.js"
import bcrypt from 'bcrypt'

export const registermember=async(req:Request,resp:Response):Promise<void>=>{
    const{email,password}=req.body as {
        
        email:string,
        password:string,
        
    }
    if(!email || !password){
        resp.status(400).json({success:false,message:"Fields are missing"})
          return
   }
try{
    const hash=await bcrypt.hash(password,10)
   await collection1.create({email,password:hash})
   resp.status(200).json({success:true,message:"registration success"})
}catch(err){
    resp.status(400).json({success:false,message:"Registration failed"})
    return
}
}


export const loginmember=async(req:Request,resp:Response):Promise<void>=>{
    const{email,password}=req.body as {
        
        email:string,
        password:string,
        
    }
    if(!email || !password){
        resp.status(400).json({success:false,message:"Fields are missing"})
          return
   }
try{
   const res=await collection1.findOne({email})
    if(!res){
        resp.status(400).json({success:false,message:"user is missing"})
        return 
    }
    const compare=await bcrypt.compare(password,res.password)
    if(!compare){
        resp.status(400).json({success:false,message:"password is incorrect"})
        return 
    }
   resp.status(200).json({success:true,message:"login success"})
}catch(err){
    resp.status(400).json({success:false,message:"Registration failed"})
    return
}
}


export const getusers=async(_req:Request,res:Response)=>{
    const result=await collection1.find()
    return res.status(200).json({result})

}