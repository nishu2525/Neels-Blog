// import { useState, useEffect } from 'react';
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import logo from '../assets/WEBSITE_Pics/logo.png'
import {signoutSuccess} from '../redux/user/userSlice.js';
import { useDispatch } from 'react-redux';

export default function Header() {
    const path = useLocation().pathname;
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
    <Navbar className='border-b-2 sticky top-0 z-10 bg-whiteText '>
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
            <Link to='/Sign-in'>
            <Button outline gradientDuoTone='purpleToPink' className="font-mon">
              Admin Login
            </Button>
          </Link>
        )}
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="text-2xl">
      <Navbar.Link active={path==='/About'} className="text-lg hover:text-teal" as={"div"}>
          <Link to='/About' >About</Link>
        </Navbar.Link>
         <Navbar.Link active={path==='/Blog'}className="text-lg  hover:text-teal"  as={"div"}>
          <Link to='/Blog' >Blog</Link>
        </Navbar.Link>
        <Navbar.Link active={path==='/Publications'} className="text-lg  hover:text-teal" as={"div"}>
          <Link to='/Publications' >Publications</Link>
        </Navbar.Link>
         <Navbar.Link active={path==='/Work'} className="text-lg  hover:text-teal" as={"div"}>
          <Link to='/Work' >Work</Link>
        </Navbar.Link>
         <Navbar.Link active={path==='/Contact'} className="text-lg  hover:text-teal" as={"div"}>
          <Link to='/Contact' >Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}


{/* <Navbar.Collapse>
      <Navbar.Link as={"div"} className={getLinkClasses("/About")} onClick={() => setActivePath("/About")}>
          <Link to='/About'>About</Link>
        </Navbar.Link>
         <Navbar.Link as={"div"} className={getLinkClasses("/Blog")} onClick={() => setActivePath("/Blog")}>
          <Link to='/Blog'>Blog</Link>
        </Navbar.Link>
        <Navbar.Link as={"div"} className={getLinkClasses("/Publications")} onClick={() => setActivePath("/Publications")}>
          <Link to='/Publications'>Publications</Link>
        </Navbar.Link>
         <Navbar.Link as={"div"} className={getLinkClasses("/Work")} onClick={() => setActivePath("/Work")}>
          <Link to='/Work'>Work</Link>
        </Navbar.Link>
         <Navbar.Link as={"div"} className={getLinkClasses("/Contact")} onClick={() => setActivePath("/Contact")}>
          <Link to='/Contact'>Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse> */}