import Blog_card from '../components/Blog_card'

function Blog() {
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
      <div className="flex flex-col items-center justify-center">
        <p className="text-lightText">Your Blog&apos;s will Come Here</p>
        <div className="flex gap-2 ml-16 mb-8">
          <Blog_card />
          <Blog_card />
          <Blog_card />
        </div>
      </div>
    </div>
  )
}

export default Blog