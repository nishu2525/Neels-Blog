import { Link } from "react-router-dom"

export default function PostCard({post}) {
  // console.log(post.slug);
  return (
    <div className='group relative w-full md:w-[23rem]  border bg-heading_blue border-teal hover:border-2 h-[420px] overflow-hidden rounded-lg transition-all'>
    <Link to={`/post/${post.slug}`}>
    <img src={post.image} alt=""  className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20' />
    </Link>
    <div className="p-3 flex flex-col gap-2">
      <p className="text-lg font-semibold line-clamp-2 text-whiteText">{post.title}</p>
      <span className="italic text-sm  text-light_gray">{post.category}</span>
      <Link to={`/post/${post.slug}`} className='z-10 group-hover:bottom-0  bottom-[-200px] left-0 right-0 border border-teal text-teal-500 hover:bg-teal hover:text-whiteText transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none '>
      Read More</Link>
    </div>
    </div>
  )
}
