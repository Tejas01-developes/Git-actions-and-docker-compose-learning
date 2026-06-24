import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path:'../.env'})

class connectdatabase{
    private url:string

    constructor(){
        this.url=process.env.DB_URL as string
    }

async connectdb(){
    try{
    await mongoose.connect(this.url)
    console.log("database connected")
}catch(err){
    console.log("database connection failed")
}
}

}

export default new connectdatabase()