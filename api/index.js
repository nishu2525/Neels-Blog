import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
dotenv.config();
mongoose.connect(
  process.env.MONGOOSEURL
).then(()=>{
    console.log('Database Connected Successfully');
}).catch((err)=>{
    console.log(err);
})


const app = express();

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server Running Successfully on ${PORT}`);
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
})