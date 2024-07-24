import { Sidebar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import {  HiUser,HiArrowSmRight,HiDocumentText,HiOutlineUserGroup,HiChartPie} from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {signoutSuccess} from '../redux/user/userSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { persistor } from '../redux/store.js';

export default function DashSidebar() {
  const location =useLocation();
  const [tab,setTab] =useState('')
  const navigate=useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

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
         await persistor.purge()
        navigate('/Sign-in')
      }
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <Sidebar className='w-full md:w-56'>
    <Sidebar.Items>
      <Sidebar.ItemGroup className='flex flex-col gap-1'>
      {currentUser && currentUser.isAdmin && (
            <Link to='/dashboard?tab=dash'>
              <Sidebar.Item
                active={tab === 'dash' || !tab}
                icon={HiChartPie}
                as='div'
              >
                Dashboard
              </Sidebar.Item>
            </Link>
          )}
       <Link to='/dashboard?tab=profile'>
        <Sidebar.Item active={tab==='profile'} icon={HiUser} label={currentUser.isAdmin? 'Admin': "User"} labelColor='dark' as='div'>
    Profile
        </Sidebar.Item>
        </Link>
        {currentUser.isAdmin && (
            <Link to='/dashboard?tab=posts'>
              <Sidebar.Item
                  active={tab === 'posts'}
                 icon={HiDocumentText}
                as='div'
              >
                Posts
              </Sidebar.Item>
            </Link>
          )}
          {currentUser.isAdmin && (
            <Link to='/dashboard?tab=users'>
              <Sidebar.Item
                  active={tab === 'users'}
                 icon={HiOutlineUserGroup}
                as='div'
              >
                Users
              </Sidebar.Item>
            </Link>
          )}
        <Sidebar.Item  icon={HiArrowSmRight} className='cursor-pointer'onClick={handleSignout}>
    Sign out
        </Sidebar.Item>
      </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
