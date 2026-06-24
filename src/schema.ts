import mongoose from 'mongoose'


const schema=new mongoose.Schema({

email:{
type:String,
unique:true,
required:true
},

password:{
    type:String,
    required:true
}

})

export const collection1=mongoose.model("data",schema)
