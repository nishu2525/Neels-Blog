import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import PostCard from "../components/PostCard";
import Divider from "@mui/material/Divider";
useParams

export default function PostPage() {
    const {postSlug}=useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [post, setPost] = useState(null);
    const [recentPosts, setRecentPosts] = useState(null);
    console.log(post);
    console.log("Error",error);
    useEffect(()=>{
        const fetchPost =async()=>{
            try {
                setLoading(true)
                const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
            setPost(data.posts[0]);
            setLoading(false);
            setError(false);
          }
            } catch (error) {
             setError(true);
             setLoading(false);
            }
        }
        fetchPost()
    },[postSlug]);

    useEffect(() => {
      try {
        const fetchRecentPosts = async () => {
          const res = await fetch(`/api/post/getposts?limit=3`);
          const data = await res.json();
          if (res.status==200) {
            setRecentPosts(data.posts);
          }
        };
        fetchRecentPosts();
      } catch (error) {
        console.log(error.message);
      }
    }, []);

    if(loading)return
    <div className='flex justify-center items-center '>
    <Spinner size='xl' />
  </div>
  return (
    <>
    <main className='p-3 flex flex-col mx-auto min-h-screen mb-12'>
         <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl text-lightText capitalize'>
        {post && post.title}
        <Link
        to={`/search?category=${post && post.category}`}
        className='self-center'
      >
        <Button  pill size='xs' className='ml-4 mt-6'>
          {post && post.category}
        </Button>
      </Link>
      <img
        src={post && post.image}
        alt={post && post.title}
        className='mt-10 p-3 max-h-[600px] w-full object-cover'
      />
      </h1>
      <div className='flex justify-between p-3 border-b border-teal mx-auto w-full max-w-2xl text-xs text-light_gray'>
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className='italic'>
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className='p-3 max-w-2xl mx-auto w-full post-content'
        dangerouslySetInnerHTML={{ __html: post && post.content }}>

        </div>

      {/* <div className='max-w-4xl mx-auto w-full'> */}
        {/* <CallToAction /> */}
      {/* </div> */}
      {/* <CommentSection postId={post._id} /> */}
<div>  <Divider className=' h-1 bg-lightText w-[100%] ' /></div>
   <div className='flex flex-col justify-center items-center mb-5'> 
        <h1 className='text-xl mt-5 text-amazon_yellow'>Recent articles</h1>
        <div className='flex flex-wrap gap-5 mt-5 justify-center'>
       {recentPosts && 
          recentPosts.map((post) => <PostCard key={post._id}  post={post} />)} 
      </div> 
      </div> 
    </main>
    </>
  )
}
