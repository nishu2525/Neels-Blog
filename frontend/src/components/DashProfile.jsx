import { useSelector } from 'react-redux';
import avatar from '../assets/WEBSITE_Pics/avatar.png'
import { Button, TextInput } from 'flowbite-react';
import { signoutSuccess } from '../redux/user/userSlice'; 
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch=useDispatch();
const handleSignout =async ()=>{
  try {

    const res= await fetch('/api/user/signout',{
      method:'POST',
    })
    const data =await res.json();
    if(!res.ok){
      console.log(data.message);
    }
    else{
      dispatch(signoutSuccess());
    }
  } catch (error) {
    console.log(error.message);
  }
}
  
  return (
    <div className=' max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-2xl capitalize text-whiteText'>profile</h1>
      <form className="flex flex-col gap-4">
       <div className='w-32 h-32 my-4 mx-44'>
       <img src={avatar} alt=""  className=' cursor-pointer  border-4 border-whiteText object-cover rounded-full'/>
       </div>
       <TextInput type='text' id='username' placeholder='username'  defaultValue={currentUser.username}/>
       <TextInput type='email' id='email' placeholder='email'  defaultValue={currentUser.email}/>
       <TextInput type='password' id='password' placeholder='********' />
   <Link to ='/create-post'>
   <Button type='button'outline gradientDuoTone='purpleToPink'   className='w-full'>
           Create a post
        </Button></Link>
         {/* <span className='cursor-pointer'>Delete Account</span> */}
        </form>
      <div className='text-red-600 flex justify-center mt-4'>
        <span className='cursor-pointer' onClick={handleSignout}>Sign out</span>

      </div>
    </div>
  )
}
