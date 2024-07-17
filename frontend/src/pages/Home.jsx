import { useEffect, useState } from "react";
import photo from "../assets/WEBSITE_Pics/Photo.jpeg";
import Divider from "@mui/material/Divider";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";
// import Carousel from "../components/Carousel";
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Slider from "../components/Slider";
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  //  let slides=[]
  return (
    <div className='flex flex-col items-center justify-center bg-dark_gray min-h-screen'>
      <section className='flex flex-col md:flex-row items-center  justify-evenly w-[90%] mb-8'>
        <div className='flex flex-col justify-center p-2 md:mt-20 h-full w-3/3 md:w-2/3 '>
          <div className='text-center  tracking-widest  md:pl-12 md:pr-12 h-3/4 font-montserrat text-2xl text-amazon_yellow font-semibold '>
            <p>
              Marketing isn&apos;t just about selling products or crafting
              catchy slogans. It&apos;s about understanding people—their hopes,
              dreams, fears, and desires. It&apos;s about weaving stories that
              resonate on a deeply human level, creating connections beyond
              transactions. In a world where consumers are bombarded with
              messages every second, the real challenge for us as marketers is
              to be authentic, genuine, and impactful.
            </p>
          </div>
          <Divider className=' h-1 bg-light_color w-[95%] ' />

          <div className='text-center font-montserrat text-md font-extralight text-amazon_yellow md:pl-2 md:pr-12 pt-4'>
            <p>
              Innovation does&apos;t happen in isolation. It thrives when we come
              together, share ideas, challenge each other, and push boundaries.
              Collaboration is the heart of creativity. The best ideas emerge
              when diverse minds work in harmony, each bringing a unique
              perspective. I urge you to seek out collaborations, build teams
              that challenge you, and always remain open to new
              ideas. <Link to={'/Contact'} className="text-teal hover:underline hover:italic">  Lets talk! <AttachEmailIcon/> </Link>
            </p>
          </div>
        </div>
        <div className=' flex justify-center items-center rounded-full bg-white h-3/4 mt-12 '>
          <img
            src={photo}
            alt='Creative'
            className='rounded-full  object-fit shadow-lg h-[30rem] w-[30rem] '
          />
        </div>
      </section>
      <div className="max-w-full mx-auto my-6 max-h-svh"><Slider/></div>
        <div className='max-w-full mx-auto flex flex-col gap-8 py-7 md:px-20 mb-16'>
          {posts && posts.length > 0 && (
            <div className='flex flex-col gap-6'>
              <h2 className='text-2xl font-semibold text-center  text-amazon_yellow underline'>
                Recent Posts
              </h2>
              <div className='flex flex-wrap gap-4'>
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
