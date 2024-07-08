import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(
  process.env.MONGOOSEURL
).then(()=>{
    console.log('Database Connected Successfully');
}).catch((err)=>{
    console.log(err);
})


const app = express();
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server Running Successfully on ${PORT}`);
});
