import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

const connectDb = async()=>{
    try{
        mongoose.connect(`${process.env.MONGO_URL}`)
        console.log('jingalala')
    }
    catch(error){
        cosole.error(error)
    }
}





export default connectDb