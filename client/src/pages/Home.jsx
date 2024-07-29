import { useContext, useEffect, useState } from "react";
import photo from "../assets/WEBSITE_Pics/Photo.jpeg";
import Divider from "@mui/material/Divider";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Slider from "../components/Slider";
import { VisitCountContext } from "../App";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [, setVisitCount] = useContext(VisitCountContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);


  useEffect(() => {
    const updateVisitCount = async () => {
      try {
        const response = await fetch('/api/visit/visit-count');
        const data = await response.json();
        setVisitCount(data.count);
      } catch (error) {
        console.error('Error updating visit count:', error);
      }
    };
    updateVisitCount();
  }, [setVisitCount]);

  return (
    <div className='flex flex-col items-center justify-center bg-dark_gray min-h-screen'>
    
      <section className='flex flex-col-reverse md:flex-row items-center  justify-evenly w-[94%] md:mb-32  md:mt-6'>
        <div className='flex flex-col justify-center p-2 md:mt-2 h-full w-3/3 md:w-2/4 '>
          <div className='text-left font-montserrat text-md font-extralight text-amazon_yellow md:pl-0 md:pr-12'>
          <h1 className="mt-24 text-6xl font-semibold text-amazon_yellow sm:mt-12">Marketing Simplified</h1>
          <br />
            <p>
              Marketing isn&apos;t just about selling products or crafting
              catchy slogans. It&apos;s about understanding people—their hopes,
              dreams, fears, and desires. It&apos;s about weaving stories that
              resonate on a deeply human level, creating connections beyond
              transactions. In a world where consumers are bombarded with
              messages every second, the real challenge for us as marketers is
              to be authentic, genuine, and impactful.
              Innovation does&apos;t happen in isolation. It thrives when we come
              together, share ideas, challenge each other, and push boundaries. <br /> <br /> <Link to={'/Contact'} className="text-teal hover:underline hover:italic">  Lets talk! <AttachEmailIcon/> </Link>
            </p>
          </div>
        </div>
          <div className=' flex justify-center items-center rounded-full bg-white h-3/4 mt-[3rem] mr-2 '>
          <img
            src={photo}
            alt='Creative'
            className='rounded-full  object-fit shadow-lg md:h-[25rem] w-[20rem] h-[28rem]'
          />
        </div>
      </section>

       <div className="flex flex-row items-center mr-[57rem]">
        <p className=" text-amazon_yellow  text-2xl font-semibold font-montserrat mr-2"> Gallery </p>
        <Divider  className=' h-1 bg-light_color w-36 '/>
       </div>
       
      <div className="max-w-6xl mx-auto my-6 max-h-2xl"><Slider/></div>

      <div className="flex flex-row items-center justify-center mr-[57rem]">
        <p className=" text-amazon_yellow  text-2xl font-semibold font-montserrat mr-2">Recent Posts</p>
        <Divider  className=' h-1 bg-light_color w-20 '/>
       </div>

        <div className='max-w-7xl mx-auto flex flex-col gap-8  md:px-16 mb-12 sm:px-3'>
          {posts && posts.length > 0 && (
            <div className='flex flex-col gap-6'>
              <div className='flex flex-wrap gap-4 py-7'>
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            </div>
          )}
        </div>
     
    </div>
  );
};

export default Home;
