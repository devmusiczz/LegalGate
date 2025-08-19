import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express();
dotenv.config();

try {
  await mongoose.connect(process.env.MONGO);
  console.log("MongoDb Connected Succesfully!!!")
} catch (error) {
  console.error("❌ MongoDB connection failed:", error);
;
}

app.listen(8080 , ()=>{
    console.log("Server Started on Port 8080")
})