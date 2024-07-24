import { useEffect, useState } from "react"
import PostCard from "../components/PostCard";
import { Divider } from "@mui/material";

export default function Blog() {
  const[posts,setPosts]=useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getposts?category=blog');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center lg:p-5 pb-12 bg-dark_gray p-3">
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold my-8  text-lightText">
          Welcome to My Blog
        </h1>
        <h3 className="text-xl font-medium py-2 text-teal">
          Inspiring Marketers to Innovate and Excel
        </h3>
        <p className=" text-center tracking-wide leading-10 text-2xl font-light text-whiteText sm:tracking-normal">
          Here, you&apos;ll find insights, trends, and tips on marketing, branding, and strategy. Dive into articles that not only inform but also inspire action and innovation in the ever-evolving world of marketing. Stay tuned for stories from my professional journey, guest posts, and much more. Let&apos;s learn, grow, and succeed together!
        </p>
      </div>

      <div className="flex flex-row items-center mr-[63rem] py-4">
        <p className=" text-amazon_yellow  text-2xl font-semibold font-montserrat"> Recent Post </p>
        <Divider  className=' h-1 bg-light_color w-[98%] mx-1'/>
       </div>

      <div className='max-w-7xl mx-auto flex flex-col gap-12 py-7 sm:px-0 lg:px-16 mb-4'>
      {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <div className='flex flex-wrap gap-4'>
            {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

