import { useEffect, useState } from "react"
import PostCard from "../components/PostCard";

export default function Blog() {
  const[posts,setPosts]=useState([])

  useEffect(()=>{
     const fetchPosts =async()=>{
       const res =await fetch ('/api/post/getPosts');
       const data=await res.json();
       setPosts(data.posts)
     }
     fetchPosts();
  },[])


  return (
    <div className="flex flex-col items-center justify-center p-5 pb-12 bg-dark_gray">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-semibold my-8  text-lightText">
          Welcome to My Blog
        </h1>
        <h3 className="text-xl font-medium mb-4 text-teal">
          Inspiring Marketers to Innovate and Excel
        </h3>
        <p className="pl-40 pr-24 text-center tracking-wide leading-10 text-2xl font-light text-whiteText">
          Here, you&apos;ll find insights, trends, and tips on marketing, branding, and strategy. Dive into articles that not only inform but also inspire action and innovation in the ever-evolving world of marketing. Stay tuned for stories from my professional journey, guest posts, and much more. Let&apos;s learn, grow, and succeed together!
        </p>
      </div>
      <div className='max-w-full mx-auto flex flex-col gap-8 py-7 md:px-10 mb-16'>
      {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center text-whiteText'>Recent Blogs</h2>
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

