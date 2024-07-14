import mongoose from "mongoose";
// import avatar from '../../frontend/src/assets/WEBSITE_Pics/avatar.png'
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
          },
          email: {
            type: String,
            required: true,
            unique: true,
          },
          password: {
            type: String,
            required: true,
          },
          profilePicture:{
            type:String,
            default:
              'https://png.pngtree.com/png-clipart/20220401/ourmid/pngtree-d-rendering-gentleman-male-avatar-with-black-suit-and-red-butterfly-png-image_4521690.png',
          },
          isAdmin:{
            type:Boolean,
            default:false,
          }
        },
        { timestamps: true }
);

const User= mongoose.model('User',userSchema);
export default User;