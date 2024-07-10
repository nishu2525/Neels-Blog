// import { useState, useEffect } from 'react';
import { Button, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/WEBSITE_Pics/logo.png'
export default function Header() {
    const path = useLocation().pathname;
  
  return (
    <Navbar className='border-b-2 sticky top-0 z-10 bg-whiteText '>
      <Link to='/' className="" >
        <img src={logo} alt="logo" className="h-[4.2rem]" />
      </Link>
      <div className='flex gap-2 md:order-2'>
        <Link to='/Sign-up'>
          <Button outline gradientDuoTone='purpleToPink' className="font-mon">
            Admin Login
          </Button>
        </Link>
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