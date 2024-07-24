import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import postRoutes from  './routes/post.route.js'
import visitRoutes from './routes/visit.route.js'
 import cookieParser from 'cookie-parser';
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
app.use(cookieParser());
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server Running Successfully on ${PORT}`);
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/post', postRoutes)
app.use('/api/visit',visitRoutes)

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
})
  // app.post('/google/auth', async (req,res,next)=>{
  //   try {
  //     console.log(req.body);
  //   const { email, name, googlePhotoUrl } = req.body;
  //     const user = await User.findOne({ email });
  //     if (user) {
  //       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  //       const { password, ...rest } = user._doc;
  //       res
  //         .status(200)
  //         .cookie('access_token', token, {
  //           httpOnly: true,
  //         })
  //         .json(rest);
  //     } else {
  //       const generatedPassword =
  //         Math.random().toString(36).slice(-8) +
  //         Math.random().toString(36).slice(-8);
  //       const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
  //       const newUser = new User({
  //         username:
  //           name.toLowerCase().split(' ').join('') +
  //           Math.random().toString(9).slice(-4),
  //         email,
  //         password: hashedPassword,
  //         profilePicture: googlePhotoUrl,
  //       });
  
  //       await newUser.save();
  //       const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
  //       const { password, ...rest } = newUser._doc;
  //       res
  //         .status(200)
  //         .cookie('access_token', token, {
  //           httpOnly: true,
  //         })
  //         .json(rest);
  //     }
  //   } catch (error) {
  //     next(error);
  //   }
  // })