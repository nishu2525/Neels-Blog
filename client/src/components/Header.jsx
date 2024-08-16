// import { useState, useEffect } from 'react';
import { Avatar, 
  // Button,
   Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import logo from '../assets/WEBSITE_Pics/logo.png'
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { persistor } from '../redux/store.js';
import { useEffect } from "react";
export default function Header() {
    const path = useLocation().pathname;
    const { currentUser } = useSelector((state) => state.user);
    const dispatch=useDispatch();
    const navigate=useNavigate();

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
           await persistor.purge()
          navigate('/Sign-in')
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    useEffect(() => {
      window.scrollTo(0, 0);
  }, [path]);
  
  return (
    <Navbar className='border-b-2 sticky top-0 z-50 bg-whiteText '>
      <Link to='/' className="" >
        <img src={logo} alt="logo" className="h-[4.2rem]" />
      </Link>
      <div className='flex gap-2 md:order-2'>

        {currentUser ? (
          <Dropdown arrowIcon={false} inline label={
            <Avatar alt='user' img={currentUser.profilePicture} rounded />}>
              <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
            </Dropdown.Header>
            <Link to={'/Dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) :(
          <>
          {/* <Link to='/Sign-in'>
           <Button  gradientDuoTone='purpleToPink' className="font-mon">
            Admin Login
         </Button>
       </Link> */}
          </>
        )}
         <Navbar.Toggle />  
       
      </div>
      <Navbar.Collapse className="text-2xl">  
        <Navbar.Link active={path==='/'} className="text-lg text-dark_gray hover:text-teal" as={"div"}>
          <Link to='/' >Home</Link>
        </Navbar.Link>
      <Navbar.Link active={path==='/About'} className="text-lg text-dark_gray  hover:text-teal" as={"div"}>
          <Link to='/About' >About</Link>
        </Navbar.Link>
         <Navbar.Link active={path==='/Blog'}className="text-lg text-dark_gray   hover:text-teal"  as={"div"}>
          <Link to='/Blog' >Blog</Link>
        </Navbar.Link>

        {/* These we will use in later time*/}
        {/* <Navbar.Link active={path==='/Publications'} className="text-lg  text-dark_gray   hover:text-teal" as={"div"}>
          <Link to='/Publications' >Publications</Link>
        </Navbar.Link> */}

         <Navbar.Link active={path==='/Work'} className="text-lg text-dark_gray hover:text-teal" as={"div"}>
          <Link to='/Work' >Work</Link>
        </Navbar.Link>
         <Navbar.Link active={path==='/Contact'} className="text-lg text-dark_gray hover:text-teal" as={"div"}>
          <Link to='/Contact' >Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}


