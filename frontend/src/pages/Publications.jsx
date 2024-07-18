import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";



export default function Publications() {
  const[posts,setPosts]=useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getposts?category=publications');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pl-12 pr-12 pb-4">
    <div className="flex flex-col items-center justify-center p-12">
      <h1 className="text-3xl font-semibold mt-1 mb-7  text-lightText">
        Publications
      </h1>
      <p className="pl-40 pr-24 text-center tracking-wide leading-10 text-2xl font-light text-lightText">
        Explore my published works that dive into various aspects of
        marketing, brand strategy, and consumer behavior. My articles have
        been featured in esteemed journals and magazines, reflecting my deep
        understanding and innovative approach in the field.
      </p>
    </div>
    <div className='max-w-full mx-auto flex flex-col gap-8 py-7 md:px-10 mb-16 ml-1'>
      {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center  text-whiteText'>Recent Publications</h2>
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
}
